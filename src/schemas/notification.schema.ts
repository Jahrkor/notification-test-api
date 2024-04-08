import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { collections } from "../common/constants/constants";
import { UserModel } from "../models/user.model";

const notificationSchema = new mongoose.Schema({
  createdAt: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: UserModel,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  category: {
    type: ObjectId,
    ref: collections.categories,
    required: true,
  },
  channel: {
    type: ObjectId,
    ref: collections.channels,
    required: true,
  },
});

export { notificationSchema };
