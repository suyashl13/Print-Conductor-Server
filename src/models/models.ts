import { Schema, model } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
      maxLength: 30,
    },
    gender: {
      type: String,
      required: true,
      maxLength: 5,
    },
    role: {
      type: Number,
      required: true,
      maxLength: 2,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("user", UserSchema);

export { User };
