import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

const User = mongoose.model("User", schema);

export default User;
