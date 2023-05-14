const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/api/products")

//q9wl6E3knzIcGezG

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express());

app.use("/products", productsRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
  })
  
  app.use((error, req, res, next) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({ message, })
  });

module.exports = app;