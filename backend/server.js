// this is the entry point of our api

import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";

// dotenv.config();

const app = express();

// ()=>{}

// this is the product database
app.get("/product", (req, res) => {
  res.send("server is ready");
});

// console.log(process.env.MONGO_URI);
// to use it install .env package
app.listen(5000, () => {
  console.log("server sarted at http://localhost:5000");
});

// MONGO_URI = mongodb+srv://vnimish20:<pswd>@cluster0.u5l8o.mongodb.net/<products></products>?retryWrites=true&w=majority&appName=Cluster0
