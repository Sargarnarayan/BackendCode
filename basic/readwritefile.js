// Asynchronous
var fs = require("fs");
const path = require("path");
fs.readFile('data.txt', function (err, data) {
if (err) {
	return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});


let  newFile= `hello this is new file containt ${fs}: `;
fs.writeFileSync('data.txt', newFile);
console.log('data is written to a file');
