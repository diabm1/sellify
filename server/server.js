// import React from "react"

const express = require("express")
const data = require("./data")
const config = require("./config");
const mongoose = require('mongoose');


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason ));


const app = express();

app.get("/api/products", (req, res) =>{
    res.send(data.products);
});

app.listen(5000, () => {console.log('Server started at http://localhost:5000')})