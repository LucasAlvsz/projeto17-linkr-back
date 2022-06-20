import { Router } from "express";

import {
    getTrending,
    getHashtagPosts,
} from "../controllers/hashtagsController.js";

import getHashtagPostsMiddleware from "../middlewares/getHashtagPostsMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const hashtagsRouter = Router();

hashtagsRouter.use(bearerTokenValidateMiddleware);
hashtagsRouter.get("/trending", getTrending);
hashtagsRouter.get(
    "/hashtag/:hashtag",
    getHashtagPostsMiddleware,
    getHashtagPosts,
);

export default hashtagsRouter;
