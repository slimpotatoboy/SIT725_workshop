let express = require("express");
let router = express.Router();
let controller = require("../controllers/controller");

// load home page
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// load contact page
router.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});

// load calculator page
router.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/public/calculator.html");
});

router.post("/api/contact", function (req, res) {
  controller.postContact(req, res);
});

router.get("/api/contacts", (req, res) => {
  controller.getAllContacts(req, res);
});

module.exports = router;
