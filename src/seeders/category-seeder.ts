import mongoose from "mongoose";
import dotenv from "dotenv";
import { CategoryModel } from "../models/category.model";

const { DATABASE_URL } = dotenv.config().parsed;
async function seedDB() {
  await mongoose.connect(DATABASE_URL);

  try {
    console.log("Connected correctly to server");

    let categories = [
      {
        name: "sports",
      },
      {
        name: "finance",
      },
      {
        name: "movies",
      },
    ];

    await CategoryModel.insertMany(categories);

    console.log("Database seeded! :)");
    await mongoose.disconnect();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB().then();
