const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/api/products");
const authRouter = require("./routes/api/users");

//q9wl6E3knzIcGezG

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.use("/api/users", authRouter)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' })
  })
  
  app.use((error, req, res, next) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({ message, })
  });

module.exports = app;