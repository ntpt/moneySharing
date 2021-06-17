const express = require("express");
const router = express.Router();

const {
  createGroup,
  listGroups,
  detailGroup,
  modifyGroup,
  listMembers,
  addMember,
  deleteMember
} = require("../controllers/group");

router.route("/:userID").post(createGroup).get(listGroups);

router.route("/:userID/:groupID").get(detailGroup).patch(modifyGroup);

router
  .route("/member/:userID/:groupID")
  .get(listMembers)
  .patch(addMember)
  .delete(deleteMember);

module.exports = router;
