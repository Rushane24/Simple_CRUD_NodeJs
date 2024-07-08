const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a Product Name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a Quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter a Valid Price"],
      default: 0,
    },
    image: {
        type: String,
        required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

