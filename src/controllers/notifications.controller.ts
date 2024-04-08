import {
  getNotifications,
  sendNotification,
} from "../helpers/notification.helper";
import { notificationValidator } from "../validators/notification.validator";
import { INotification } from "../interfaces/notification.interfaces";
import {globalErrorHandler} from "../common/utils/utils";

const createNotification = async (req: any, res: any) => {
  try {
    const notification: INotification = await notificationValidator.validateAsync(
        req.body,
    );

    await sendNotification(notification);

    return res.status(200).json({ message: "Sent notification" });
  } catch(e) {
    globalErrorHandler(e, res);
  }
};

const getAllNotifications = async (req: any, res: any) => {
  try {
    const data = await getNotifications();

    return res.status(200).json({ message: "All Notifications", data });
  } catch(e) {
    globalErrorHandler(e, res);
  }
};

export { createNotification, getAllNotifications };
