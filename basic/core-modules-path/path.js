const path = require('path');
const fs = require('fs');

// read from employees/employees.json
fs.readFile(('employees/employee.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));

    let customer = JSON.parse(data);
    fs.writeFile(path.join(__dirname, 'util', 'customer.json'), JSON.stringify(customer), 'utf-8', (err) => {
        if (err) throw err;
        console.log('data is written to file');
    });

});

