import { Router } from "express";
import {
    getUserPageData,
    getUsersSearchBar,
} from "../controllers/userPageController.js";
import getUserPageMiddleware from "../middlewares/getUserPageMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const userPageRouter = Router();

userPageRouter.use(bearerTokenValidateMiddleware);
userPageRouter.get("/user/:id", getUserPageMiddleware, getUserPageData);
userPageRouter.get("/user", getUsersSearchBar);

export default userPageRouter;
