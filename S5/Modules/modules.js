var fs = require('fs');


fs.promises.readFile("./boardgames.json")
  .then(function (result) {
    let fileContent = JSON.parse(result);
    for (const [key, value] of Object.entries(fileContent)) {
      console.log(JSON.stringify(value));
      fs.promises.writeFile(`./${key}.json`, JSON.stringify(value))
        .then(function (result) {
          console.log("" + result);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  })
  .catch(function (error) {
    console.log(error);
  })