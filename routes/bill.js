const express = require("express");
const router = express.Router();


const {
  createBill,
  listBills,
  modifyBill,
  detailBill,
  listMembers,
} = require("../controllers/bill");

router.route("/:userID").post(createBill).get(listBills).patch(modifyBill);

router.route("/detail/:billID").get(detailBill);

router.route("/member/:billID").get(listMembers);

module.exports = router;
