require('dotenv').config()


module.exports = {
  PORT: process.env.PORT || 3001,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/sellify',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
