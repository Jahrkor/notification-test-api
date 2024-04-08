import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  name: String,
});

export { channelSchema };
