const express = require("express");
const cors = require("cors");

//q9wl6E3knzIcGezG

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express());

module.exports = app;