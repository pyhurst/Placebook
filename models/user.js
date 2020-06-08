const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  reservations: { type: Array },
  pastReservations: { type: Array }
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
}

userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js ====== No password provided ======');
    next();
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;