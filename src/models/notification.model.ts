import mongoose from "mongoose";
import { notificationSchema } from "../schemas/notification.schema";
import { collections } from "../common/constants/constants";

const NotificationModel = mongoose.model(
  collections.notifications,
  notificationSchema,
);

export { NotificationModel };
