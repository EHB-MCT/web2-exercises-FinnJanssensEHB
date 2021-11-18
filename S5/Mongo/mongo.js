import * as mdb from 'mongodb';
import * as fs from 'fs/promises'

const uri = "mongodb+srv://admin:admin@cluster0.j2k5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new mdb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Database Name
const dbName = 'Session5';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Boardgames');

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  let gloomhaven = await fs.readFile("./gloomhaven.json");
  console.log(typeof (gloomhaven));
  const insertResult = await collection.insertOne(JSON.parse(gloomhaven));
  console.log('Inserted documents =>', insertResult);

  const updateResult = await collection.updateOne({
    "name": "Gloomhaven"
  }, {
    $set: {
      "name": "Gloominghaven"
    }
  });
  console.log('Updated documents =>', updateResult);

  const deleteResult = await collection.deleteOne({
    "name": "Gloominghaven"
  });
  console.log('Deleted documents =>', deleteResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());