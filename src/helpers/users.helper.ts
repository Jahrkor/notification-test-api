import { UserModel } from "../models/user.model";

export const getUsers = async () => {
  return await UserModel.find()
    .populate("subscribed")
    .populate("channels")
    .exec();
};
