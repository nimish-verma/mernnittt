// this is the entry point of our api

import express from "express";

const app = express();
app.listen(5000, () => {
  console.log("server sarted at https://localhost/5000");
});
