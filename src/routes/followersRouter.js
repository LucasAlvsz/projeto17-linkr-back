import { Router } from "express";

import { getFollowersIds } from "../controllers/followersController.js";

import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const followersRouter = Router();

followersRouter.get(
    "/followers",
    bearerTokenValidateMiddleware,
    getFollowersIds,
);

export default followersRouter;
