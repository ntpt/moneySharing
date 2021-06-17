const express = require("express");
const router = express.Router();


const { newNoti, listNotis } = require("../controllers/notification");

router.route("/:userID").post(newNoti).get(listNotis);

module.exports = router;
