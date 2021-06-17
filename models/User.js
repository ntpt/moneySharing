const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true
   },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  balance: {
    type: Number,
  },
  friends: [mongoose.Schema.Types.ObjectId],
  groups: [mongoose.Schema.Types.ObjectId],
  bills: [mongoose.Schema.Types.ObjectId]

});


module.exports = mongoose.model('User', UserSchema);