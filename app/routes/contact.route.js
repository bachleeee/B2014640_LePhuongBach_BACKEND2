const express = require("express");
const contact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .post(contact.create)
    .get(contact.findAll)
router.route("/:id")
    .get(contact.findOne)
    
module.exports = router;