// import React from "react"

import express from "express";
import data from './backend/data';
import dotenv from 'dotenv';
import config from "./backend/config";
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import userRoute from './backend/routes/userRoute';
import productRoute from './backend/routes/productRoute'
import orderRoute from './backend/routes/orderRoute'
import path from 'path';


dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason ));


const app = express();
app.use(bodyParser.json());
app.use('/api/user', userRoute);
app.get("/api/products/:id", (req, res) =>{
    const productId = req.params.id;
    res.send(data.products.find(e => e.id === productId));
    if(product)
    res.send(product);
    else
    res.status(404).send({msg: "Oops! Product Not Found."})
});

app.get("/api/products", (req, res) =>{
    res.send(data.products);
});

app.listen(5000, () => {console.log('Server started at http://localhost:5000')})