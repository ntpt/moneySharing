const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
   lender: {type : mongoose.Schema.Types.ObjectId},
   borrower:{type: mongoose.Schema.Types.ObjectId},
   billID: {type : mongoose.Schema.Types.ObjectId},
   groupID: {type : mongoose.Schema.Types.ObjectId},
   cost: {
      type: Number,
      require: true
   }
});

module.exports = mongoose.model('Transaction', TransactionSchema);