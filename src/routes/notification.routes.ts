import { Router } from "express";
import {
  getAllNotifications,
  createNotification,
} from "../controllers/notifications.controller";
const notificationRoutes = (): Router => {
  const router: Router = Router();

  router.get("/notifications", getAllNotifications);
  router.post("/notification/create", createNotification);

  return router;
};

export { notificationRoutes };
