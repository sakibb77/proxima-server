require("dotenv").config();
const express = require("express");

//express app
const app = express();

//port
const PORT = process.env.PORT || 5000;
//listen for request
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
