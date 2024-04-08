import { Router } from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/categories.controller";
const categoriesRoutes = (): Router => {
  const router: Router = Router();

  router.post("/categories/create", createCategory);
  router.get("/categories", getAllCategories);

  return router;
};

export { categoriesRoutes };
