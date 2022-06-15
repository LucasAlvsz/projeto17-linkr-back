import { Router } from "express";

import { postUser } from "../controllers/userPostController.js";

import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";

import postSchema from "../schemas/userPostSchema.js";

const userPost = Router();

userPost.post("/post", schemaValidateMiddleware(postSchema), postUser);

export default userPost;
