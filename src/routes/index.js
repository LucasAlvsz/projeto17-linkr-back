import { Router } from "express";

import authRouter from "./authRouter.js";
import hashtagsRoutes from "./hashtagsRoutes.js";
import userPost from "./userPostRoutes.js";

const router = Router();

router.use(authRouter);
router.use(hashtagsRoutes);
router.use(userPost);

export default router;
