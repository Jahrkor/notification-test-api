import mongoose from "mongoose";
import { userSchema } from "../schemas/user.schema";
import { collections } from "../common/constants/constants";
const UserModel = mongoose.model(collections.users, userSchema);

export { UserModel };
