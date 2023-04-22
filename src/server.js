require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const router = require("./routes/auth.routes");
const { pageNotFound, errorHandler } = require("./middlewares/handler");

const app = express();

app.use(express.static(path.join(__dirname, "../", "public")));
app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// disable x-powered-by
app.disable("x-powered-by");

// routes
app.use("/api/", router);

// page not found middleware
app.use(pageNotFound);

// error handler middleware
app.use(errorHandler);

module.exports = app;
