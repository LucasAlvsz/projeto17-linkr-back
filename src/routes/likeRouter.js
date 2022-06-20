import { Router } from "express";
import { getLikes, likeMessage } from "../controllers/likeController.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import { hasLikedMiddleware } from "../middlewares/hasLikedMiddlaware.js";

const likeRouter = Router();

likeRouter.post(
    "/likes",
    bearerTokenValidateMiddleware,
    hasLikedMiddleware,
    likeMessage,
);
likeRouter.get("/likes", bearerTokenValidateMiddleware, getLikes);

export default likeRouter;
