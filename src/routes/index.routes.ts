import { notificationRoutes } from "./notification.routes";
import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { usersRoutes } from "./users.routes";
import { channelsRoutes } from "./channels.routes";

const routes: (() => Router)[] = [
  notificationRoutes,
  categoriesRoutes,
  usersRoutes,
  channelsRoutes,
];

export default routes;
