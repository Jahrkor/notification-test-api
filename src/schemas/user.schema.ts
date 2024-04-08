import mongoose from "mongoose";
import { collections } from "../common/constants/constants";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phoneNumber: String,
  subscribed: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: collections.categories,
  },
  channels: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: collections.channels,
  },
  notifications: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: collections.notifications,
    required: false,
  },
});

export { userSchema };
