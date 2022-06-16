import { Router } from "express";
import { getUserPageData } from "../controllers/userPageController.js";
import getUserPageMiddleware from "../middlewares/getUserPageMiddleware.js";

const userPageRouter = Router();

userPageRouter.get("/user/:id", getUserPageMiddleware, getUserPageData);

export default userPageRouter;
