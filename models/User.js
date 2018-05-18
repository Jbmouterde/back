const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type : String, required : true, unique : true},
  picture : String,
  email : {type : String, required : true, unique : true},
  password: {type : String, required : true},
    role : {
      type : String, 
      enum : ["admin", "user"], 
      default : "user"
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
