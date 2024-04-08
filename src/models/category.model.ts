import mongoose from "mongoose";
import { categorySchema } from "../schemas/category.schema";
import { collections } from "../common/constants/constants";

const CategoryModel = mongoose.model(collections.categories, categorySchema);

export { CategoryModel };
