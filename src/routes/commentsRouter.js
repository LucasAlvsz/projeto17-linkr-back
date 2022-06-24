import { Router } from "express";

import { insertComment } from "../controllers/commentsController.js";

import bearerTokenValidateMiddleware from "../middlewares/bearerTokenValidateMiddleware.js";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import commentSchema from "../schemas/commentSchema.js";

const commentsRouter = Router();

commentsRouter.post(
    "/comments/:postId",
    bearerTokenValidateMiddleware,
    schemaValidateMiddleware(commentSchema),
    insertComment,
);

export default commentsRouter;
