import Joi from "joi";
import { INotification } from "../interfaces/notification.interfaces";

export const notificationValidator: Joi.ObjectSchema<INotification> =
  Joi.object({
    message: Joi.string().required(),
    categories: Joi.array().items(Joi.string()).required(),
    channels: Joi.array().items(Joi.string()).required(),
  });
