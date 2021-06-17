const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true
   },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator : {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  members: [mongoose.Schema.Types.ObjectId],
  bills: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Group', GroupSchema);