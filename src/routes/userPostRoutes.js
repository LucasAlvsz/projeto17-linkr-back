import { Router } from "express";

import { PostUser, deletePost } from "../controllers/userPostController.js";

import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import postSchema from "../schemas/userPostSchema.js";

const userPost = Router();

userPost.use(bearerTokenValidateMiddleware);
userPost.post("/post", schemaValidateMiddleware(postSchema), PostUser);
userPost.delete("/post/:postId", deletePost);

export default userPost;
