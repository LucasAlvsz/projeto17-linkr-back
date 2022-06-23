import { Router } from "express";
import {
    getUserPageData,
    getUsersSearchBar,
    getButtonFollowOrUnfollow,
    postFollowOrUnfollow,
} from "../controllers/userPageController.js";
import getUserPageMiddleware from "../middlewares/getUserPageMiddleware.js";
import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const userPageRouter = Router();

userPageRouter.use(bearerTokenValidateMiddleware);
userPageRouter.get("/user/:id", getUserPageMiddleware, getUserPageData);
userPageRouter.get("/user", getUsersSearchBar);
userPageRouter.get("/user/:id/follow", getButtonFollowOrUnfollow);
userPageRouter.post("/user/:id/follow", postFollowOrUnfollow);

export default userPageRouter;
