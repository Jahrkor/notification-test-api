import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import { UserModel } from "../models/user.model";
import dotenv from "dotenv";
import { CategoryModel } from "../models/category.model";
import { ChannelModel } from "../models/channel.model";

const { DATABASE_URL } = dotenv.config().parsed;
async function seedDB() {
  await mongoose.connect(DATABASE_URL);

  try {
    console.log("Connected correctly to server");

    let users = [];

    const categories = await CategoryModel.find({}, "_id").exec();

    if (!categories.length) {
      console.log("please run category seeder first! => yarn seed:categories");
      await mongoose.disconnect();
      return void 0;
    }
    const channels = await ChannelModel.find({}, "_id").exec();
    if (!channels.length) {
      console.log("please run channels seeder first! => yarn seed:channels");
      await mongoose.disconnect();
      return void 0;
    }

    for (let i = 0; i < 100; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName });

      let user = {
        id: faker.string.uuid(),
        name: `${firstName} ${lastName}`,
        email,
        phoneNumber: faker.phone.number(),
        subscribed: faker.helpers.arrayElements(
          categories.map((cat) => cat._id),
        ),
        channels: faker.helpers.arrayElements(channels.map((chan) => chan._id)),
      };

      users.push(user);
    }

    await UserModel.insertMany(users);

    console.log("Database seeded! :)");
    await mongoose.disconnect();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB().then();
