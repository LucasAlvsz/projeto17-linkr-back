import { Router } from "express";
import { CatchingPosts } from "../controllers/timelineController.js";
const timelineRouter = Router();
// colocar a rota de autenticaçao bearer
timelineRouter.get("/catchPost", CatchingPosts);

export default timelineRouter;
