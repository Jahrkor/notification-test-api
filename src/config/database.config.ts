import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

const { DATABASE_URL } = dotenv.config().parsed;

mongoose.Promise = global.Promise;

const defineSchema = async (model: mongoose.Model<any>) => {
  await model.createCollection();
  await model.ensureIndexes();
};

const defineAllSchemas = async () => {
  const schemas = mongoose.modelNames();

  for (const schema of schemas) {
    const model = mongoose.model(schema);
    await defineSchema(model);
  }
};

const connectToDatabase = async (): Promise<void> => {
  const options: ConnectOptions = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  };
  await mongoose.connect(`${DATABASE_URL}`, options);
  await defineAllSchemas();
};

const connectToDatabaseWrapper = async () => {
  while (true) {
    try {
      await connectToDatabase();
      console.log("Connected to the database");
      break;
    } catch (error) {
      console.log(error);
      console.log("Error connecting to the database, retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

export { connectToDatabaseWrapper };
