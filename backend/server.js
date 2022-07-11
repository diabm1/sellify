const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");
// const uploadRoute = require ('./routes/uploadRoute');
console.log("mongo url", config.MONGODB_URL);
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((error) => console.log(error));

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use('/api/uploads', uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
// app.get('/api/config/paypal', (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });
// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, "/../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
