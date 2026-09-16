const mongoose = require('mongoose');
const url = process.env.MONGODB;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options, function(a) {
  console.log('Connected to mongoDB.');
});

const userSchema = new mongoose.Schema({
  uid:       String, // from firebase auth
  username:  String,
  email:     String,

  createdOn: {type: Date, default: Date.now},

  settings: Object,

  notifications: [Object],
  posts:    [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  replies:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  messages: [Object],

  admin: Boolean,
  settings: Object,
  application: Object
});

const User = new mongoose.model('User', userSchema);

var models = {
  User: User
};

module.exports = models;