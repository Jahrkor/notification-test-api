import { Router } from "express";
import { getAllUsers } from "../controllers/users.controller";
const usersRoutes = (): Router => {
  const router: Router = Router();

  router.get("/users", getAllUsers);

  return router;
};

export { usersRoutes };
