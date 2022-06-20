import { Router } from "express";

import { PostUser } from "../controllers/userPostController.js";

import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import postSchema from "../schemas/userPostSchema.js";

const userPost = Router();

userPost.post(
    "/post",
    schemaValidateMiddleware(postSchema),
    // bearerTokenValidateMiddleware,
    PostUser,
);

export default userPost;
