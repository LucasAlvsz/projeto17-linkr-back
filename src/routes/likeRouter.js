import { Router } from "express";
import { likeMessage } from "../controllers/likeController.js";
import { hasLikedMiddleware } from "../middlewares/hasLikedMiddlaware.js";

const likeRouter = Router();

likeRouter.post("/like", hasLikedMiddleware, likeMessage);
likeRouter.post("/unlike");

export default likeRouter;
