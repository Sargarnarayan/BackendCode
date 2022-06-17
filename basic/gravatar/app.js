const avatar = require('gravatar');

let user = {
    name: 'narayan',
    email: "narayan@gmail.com",
    password: '123456'
};

let avtarURL = avatar.url(user.email);

let updatedUser = {
    ...user,
    avatar: avtarURL
};
console.log(updatedUser)