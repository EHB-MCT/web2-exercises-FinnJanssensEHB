import * as fs from 'fs/promises';

let result = await fs.readFile("./boardgames.json");
let boardgames = JSON.parse(result);
for (let property in boardgames) {
  console.log(property);
  await fs.writeFile(`${property}.json`, JSON.stringify(boardgames[property]));
}

// fs.promises.readFile("./boardgames.json")
//   .then(function (result) {
//     let fileContent = JSON.parse(result);
//     for (const [key, value] of Object.entries(fileContent)) {
//       console.log(JSON.stringify(value));
//       fs.promises.writeFile(`./${key}.json`, JSON.stringify(value))
//         .then(function (result) {
//           console.log("" + result);
//         })
//         .catch(function (error) {
//           console.log(error);
//         })
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//   })