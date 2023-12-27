const express = require("express");
const router = express.Router();

router.get("/category/mango", async (req, res) => {
  const title = "Hello NodeJS templete engine!!";
  //   res.render("index", { title });
  res.render("category/mango", { layout: "layout/layout-without-nav" });
});

router.get("/home", async (req, res) => {
  const title = "Hello NodeJS templete engine!!";
  //   res.render("index", { title });
  res.redirect("http://localhost:5000/templete/category/mango");
});

module.exports = router;
