const { Schema } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const categoryModel = mongoose.model("categoryModel", categorySchema);

module.exports = categoryModel;
