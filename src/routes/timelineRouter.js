import { Router } from "express";
import { CatchingPosts } from "../controllers/timelineController.js";
const timelineRouter = Router();
// colocar a rota de autenticaçao bearer
timelineRouter.get("/catchPosts", CatchingPosts);

export default timelineRouter;
