import mongoose from "mongoose";
import { collections } from "../common/constants/constants";
import { channelSchema } from "../schemas/channel.schema";

const ChannelModel = mongoose.model(collections.channels, channelSchema);

export { ChannelModel };
