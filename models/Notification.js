const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
   from: {type : mongoose.Schema.Types.ObjectId,
      require: true
   },
   to:{type: mongoose.Schema.Types.ObjectId,
      require: true
   },
   content: {
      type: String,
      require: true
   },
   link: {
      type: String,
      require: true
   }
});

module.exports = mongoose.model('Notification', NotificationSchema);