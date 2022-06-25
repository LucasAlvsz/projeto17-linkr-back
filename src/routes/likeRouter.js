import { Router } from "express";
import { likePost } from "../controllers/likeController.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import { hasLikedMiddleware } from "../middlewares/hasLikedMiddlaware.js";

const likeRouter = Router();

likeRouter.post(
    "/likes/:postId",
    bearerTokenValidateMiddleware,
    hasLikedMiddleware,
    likePost,
);

export default likeRouter;
