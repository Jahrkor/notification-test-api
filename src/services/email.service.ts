import { IUserNotification } from "../interfaces/notification.interfaces";
import { NotificationModel } from "../models/notification.model";

export const emailSender = async (notification: IUserNotification) => {
  return await NotificationModel.create(notification);
};
