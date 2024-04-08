import { ChannelModel } from "../models/channel.model";

export const getChannels = async () => {
  return await ChannelModel.find().exec();
};
