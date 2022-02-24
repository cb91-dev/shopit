import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please add your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add your last name"],
  },
  email: {
    type: String,
    required: [true, "Please add your email"],
  },
  password: {
    type: String,
    required: [true, "Please add your password"],
    minlength: [4, "Password cant be longer then 20 characters"],
    maxlength: [20, "Password cant be longer then 20 characters"],
  },
});
module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
