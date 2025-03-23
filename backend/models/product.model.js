// this file name works w the js syntax

import mongoose from "mongoose";

const prouctSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

// creating a collection Product, taking the schema from productSchema
const Product = mongoose.model("Product", productSchema);

// why not products ? as the collection name
// this is because mongoose will convert it products and will lower case the first letter of the collection name, you just wanna type up the lower case name

export default Product;
