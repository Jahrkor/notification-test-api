import { Router } from "express";
import { getAllChannels } from "../controllers/channels.controller";
const channelsRoutes = (): Router => {
  const router: Router = Router();

  router.get("/channels", getAllChannels);

  return router;
};

export { channelsRoutes };
