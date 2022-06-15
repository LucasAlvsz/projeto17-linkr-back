import {Router } from "express";
import {postUser} from "../controllers/userPostController.js";
const userPost= Router();
userPost.post("/post", postUser);

export default userPost;