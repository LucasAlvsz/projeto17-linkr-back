import { Router } from "express";
import { CatchingPosts } from "../controllers/timelineController.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const timelineRouter = Router();
timelineRouter.use(bearerTokenValidateMiddleware);
timelineRouter.get("/timeline", CatchingPosts);

export default timelineRouter;
