import { categoryValidator } from "../validators/categories.validator";
import { CategoryModel } from "../models/category.model";
import {globalErrorHandler} from "../common/utils/utils";

const createCategory = async (req: any, res: any) => {
  try {
    const { name } = await categoryValidator.validateAsync(req.body);

    const categoryExist = await CategoryModel.findOne({ name });

    if (categoryExist) {
      return res.status(409).json({ message: "Category already exist." });
    }

    const response = await CategoryModel.create(name);

    return res
      .status(200)
      .json({ message: "Category has been added.", data: response });
  } catch (e) {
    globalErrorHandler(e, res);
  }
};

const getAllCategories = async (req: any, res: any) => {
  try {
    const response = await CategoryModel.find().exec();

    if (!response.length) {
      return res.status(500).json({
        message: "There's no categories, please add some categories first.",
      });
    }

    return res
      .status(200)
      .json({ message: "Categories fetched successfully", data: response });
  } catch (e) {
    globalErrorHandler(e, res);
  }
};

export { createCategory, getAllCategories };
