import { Router } from "express";

import { PostUser } from "../controllers/userPostController.js";

import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import postSchema from "../schemas/userPostSchema.js";

const userPost = Router();

userPost.use(bearerTokenValidateMiddleware);
userPost.post(
    "/post",
    schemaValidateMiddleware(postSchema),
    PostUser,
);

export default userPost;
