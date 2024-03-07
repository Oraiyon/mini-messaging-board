const messages = [
  {
    text: "Hello, World!",
    user: "Oliver",
    added: new Date()
  },
  {
    text: "Woof",
    user: "Thor",
    added: new Date()
  }
];

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messaging Board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("new");
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  });
  res.redirect("/");
});

module.exports = router;
