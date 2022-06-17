import { Router } from "express";
import {
    getUserPageData,
    getUsersSearchBar,
} from "../controllers/userPageController.js";
import getUserPageMiddleware from "../middlewares/getUserPageMiddleware.js";

const userPageRouter = Router();

userPageRouter.get("/user/:id", getUserPageMiddleware, getUserPageData);
userPageRouter.get("/user", getUsersSearchBar);

export default userPageRouter;
