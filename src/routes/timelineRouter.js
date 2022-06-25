import { Router } from "express";
import { catchingPosts } from "../controllers/timelineController.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const timelineRouter = Router();
timelineRouter.use(bearerTokenValidateMiddleware);
timelineRouter.get("/timeline", catchingPosts);

export default timelineRouter;
