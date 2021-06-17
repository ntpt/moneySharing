const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true
   },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  total: {
    type: Number,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  members: [{_id : mongoose.Schema.Types.ObjectId, paid: Number}],
  groupID: {type : mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Bill', BillSchema);