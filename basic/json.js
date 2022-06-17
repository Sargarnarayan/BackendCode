// json file
const fs = require('fs');
const { callbackify } = require('util');

let employees = [
    { "id": 1, "fname": "narayan", "lname": "sargar" },
    { "id": 2, "fname": "narayan", "lname": "sargar" }
]
fs.writeFile('employee.json', JSON.stringify(employees), (err) => {
    if (err) throw err;
    console.log("data written");

});

fs.readFile('employee.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(data);
});