const dotenv = require('dotenv')
dotenv.config()
module.exports = {
MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/sellify',
JWT_SECRET: process.env.JWT_SECRET || 'something secret'


};