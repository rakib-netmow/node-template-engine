const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const path = require("path");
const appRouter = require("./router/index");
const expressLayout = require("express-ejs-layouts");

const app = express();
app.use(cors());
app.use(express.json());
app.use(expressLayout);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.set("layout", "layout");

app.use(express.static(__dirname + "/public"));

app.use("/templete", appRouter);

// base API
app.get("/", (req, res) => {
  res.send("Hello NodeJS templete engine!");
});

app.listen(port, () => {
  console.log("Server is runing at port ", port);
});
