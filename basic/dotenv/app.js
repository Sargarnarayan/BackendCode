const dotenv = require('dotenv');

dotenv.config('./config/data.env');

let devUrl = process.env.DEV_URL;
console.log(`devUrl: ${devUrl}`);