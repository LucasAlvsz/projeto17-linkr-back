import { Router } from "express";
import { likeMessage } from "../controllers/likeController.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import { hasLikedMiddleware } from "../middlewares/hasLikedMiddlaware.js";

const likeRouter = Router();

likeRouter.post(
    "/like",
    bearerTokenValidateMiddleware,
    hasLikedMiddleware,
    likeMessage,
);

export default likeRouter;
