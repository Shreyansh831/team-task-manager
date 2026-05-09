const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {

  res.json({
    message: "Register API Working ✅"
  });

});

router.get("/login", (req, res) => {

  res.json({
    message: "Login API Working ✅"
  });

});

module.exports = router;