const express = require ('express');
// import path from 'path';
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const config = require ('../config');


const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());


app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:3001');
});
