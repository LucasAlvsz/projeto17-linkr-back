import { Router } from "express";

import { postSignUp, postSignIn } from "../controllers/authController.js";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import emailConflictMiddleware from "../middlewares/emailConflictMiddleware.js";
import signUpSchema from "../schemas/signUpSchema.js";
import signInSchema from "../schemas/signInSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidateMiddleware(signUpSchema), emailConflictMiddleware, postSignUp);
authRouter.post("/sign-in", schemaValidateMiddleware(signInSchema), postSignIn);

export default authRouter;