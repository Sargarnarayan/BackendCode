const jwt = require('jsonwebtoken');

let user={
    id: 'gt-101',
    name: 'narayan',
    email: 'narayan@gmail.com',
};

let payload={
    id: user.id,
    name: user.name
};

let secretKey= 'ssshhhh';
let token = jwt.sign(payload, secretKey,{expiresIn: 3000});
console.log(token);


// to verify the token
jwt.verify(token, secretKey, (err, decoded)=>{
    if(err) throw err;
    console.log(decoded);
});