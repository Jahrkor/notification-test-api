import { NotificationModel } from "../models/notification.model";
import {
  INotification,
  IUserNotification,
} from "../interfaces/notification.interfaces";
import { UserModel } from "../models/user.model";
import { IUser } from "../interfaces/user.interfaces";
import { NotificationTypesEnum } from "../common/enums/notification-types.enum";
import { emailSender } from "../services/email.service";
import { smsSender } from "../services/sms.service";
import { pushNotificationSender } from "../services/push-notification.service";
import { ChannelModel } from "../models/channel.model";
import { IChannel } from "../interfaces/channel.interfaces";

export const sendNotification = async (
  notification: INotification,
): Promise<any> => {
  const userNotifications: IUserNotification[] =
    await createUserNotifications(notification);

  console.log(userNotifications);
  await Promise.all(
    userNotifications.map(
      async (userNotification: IUserNotification): Promise<any> =>
        await handleNotification(userNotification),
    ),
  );
};

export const getNotifications = async () => {
  return await NotificationModel.find()
    .populate("user")
    .populate("category")
    .populate("channel")
    .sort({'createdAt': -1})
    .exec();
};

export const createUserNotifications = async (
  notification: INotification,
): Promise<IUserNotification[]> => {
  const userNotifications: IUserNotification[] = [];

  for (let category of notification.categories) {
    const users: any = await UserModel.find({
      subscribed: { $all: [category] }
    }).exec();

    for (let user of users) {
      for (let channel of notification.channels) {
        const userChannel: string = user.channels.find(
            (userChannel: string) => userChannel.toString() === channel,
        );

        if (userChannel) {
          userNotifications.push({
            createdAt: new Date(),
            user: user._id,
            message: notification.message,
            category,
            channel,
          });
        }
      }
    }
  }

  return userNotifications;
};

export const handleNotification = async (
  userNotification: IUserNotification,
): Promise<any> => {
  const channel: IChannel = await ChannelModel.findById(
    userNotification.channel,
  );

  const notificationChannels = {
    [NotificationTypesEnum.SMS]: smsSender,
    [NotificationTypesEnum.Email]: emailSender,
    [NotificationTypesEnum.PushNotification]: pushNotificationSender,
  };

  await notificationChannels[channel.name](userNotification);
};
