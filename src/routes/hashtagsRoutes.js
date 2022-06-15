import { Router } from "express";

import {
    getTrending,
    getHashtagPosts,
} from "../controllers/hashtagsController.js";

import getHashtagPostsMiddleware from "../middlewares/getHashtagPostsMiddleware.js";

const hashtagsRouter = Router();

hashtagsRouter.get("/trending", getTrending);
hashtagsRouter.get(
    "/hashtag/:hashtag",
    getHashtagPostsMiddleware,
    getHashtagPosts,
);

export default hashtagsRouter;
