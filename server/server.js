require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

//get
//encounters

//post
//login
//register
//encounters

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
