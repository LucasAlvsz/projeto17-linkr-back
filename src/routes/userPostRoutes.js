import { Router } from "express";

import {
    PostUser,
    deletePost,
    editPost,
} from "../controllers/userPostController.js";

import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import postSchema from "../schemas/userPostSchema.js";

const userPost = Router();

userPost.use(bearerTokenValidateMiddleware);
userPost.post("/post", schemaValidateMiddleware(postSchema), PostUser);
userPost.delete("/post/:postId", deletePost);
userPost.put("/post/:postId", schemaValidateMiddleware(postSchema), editPost);

export default userPost;
