const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "productModel",
    },
  ],
});

const orderModel = mongoose.model("orderModel", orderSchema);

module.exports = orderModel;
