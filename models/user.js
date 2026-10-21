const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  }, // the passport local mongoose will automatically define the username and the password by default so no need to define them seperately
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
