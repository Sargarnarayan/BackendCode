let bcrypt = require('bcryptjs');
let user = {
    name: 'narayan',
    email: 'abc@gmail.com',
    password: 'narayan@123'
};
// console.log(user);
let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password, salt);
// console.log(hashedPassword);

let updatedUser = {
    ...user,
    password: hashedPassword
};
console.log(updatedUser);

// compaire both password
if (bcrypt.compareSync('narayany@123', hashedPassword)) {
    console.log('password is matched');
}
else {
    console.log('password is not matched');
}