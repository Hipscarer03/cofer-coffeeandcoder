const express = require("express");
const morgan =require("morgan");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const Db = require("./models");
const CategoryRouter = require("./routes/category.route");
const ProductRouter = require("./routes/product.route");
const CustomerRouter = require("./routes/customer.route")
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res, next) => {
    res.status(200).json({message: "Welcome to RESTFul API - NodeJS"});
});

app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);
app.use("/customer", CustomerRouter)

app.use(async(req, res, next) => {
    next(httpErrors.BadRequest());
});

app.use(async(err, req, res, next) => {
    res.status = err.status || 500;
    res.send({message: {status: err.status, message: err.message}});
});

const port = process.env.PORT_NUMBER || 8080;
const hostname = process.env.HOST_NAME;

app.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
    Db.connectDB();
});