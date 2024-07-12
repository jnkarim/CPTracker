import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  displayName: Schema.Types.String,
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = model("User", userSchema);
export default User;
