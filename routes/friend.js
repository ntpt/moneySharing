const express = require("express");
const router = express.Router();

const {
  specificfriend,
  addfriend,
  unfriend,
  showFriends,
} = require("../controllers/friend");

router.route("/:userID").get(showFriends);

router
  .route("/:userID/:friendID")
//  .get(specificfriend)
  .post(addfriend)
  .delete(unfriend);

module.exports = router;
