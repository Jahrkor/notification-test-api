import mongoose from "mongoose";
import dotenv from "dotenv";
import { ChannelModel } from "../models/channel.model";

const { DATABASE_URL } = dotenv.config().parsed;
async function seedDB() {
  await mongoose.connect(DATABASE_URL);

  try {
    console.log("Connected correctly to server");

    let channels = [
      {
        name: "sms",
      },
      {
        name: "email",
      },
      {
        name: "pushNotification",
      },
    ];

    await ChannelModel.insertMany(channels);

    console.log("Database seeded! :)");
    await mongoose.disconnect();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB().then();
