import { Router } from "express";

import { newRepost } from "../controllers/repostsController.js";

import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";

const repostsRouter = Router();

repostsRouter.post(
    "/reposts/:postId",
    bearerTokenValidateMiddleware,
    newRepost,
);

export default repostsRouter;
