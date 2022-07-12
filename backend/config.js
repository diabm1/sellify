// const dotenv = require("dotenv");

// dotenv.config();

// module.exports = {
//   PORT: process.env.PORT || 5000,
//   MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/sellify",
//   JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
//   accessKeyId: process.env.accessKeyId || "accessKeyId",
//   secretAccessKey: process.env.secretAccessKey || "secretAccessKey",
//   // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
// };
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/sellify',
JWT_SECRET: process.env.JWT_SECRET || 'something secret'


};
