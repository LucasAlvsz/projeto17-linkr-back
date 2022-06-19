import { Router } from "express";

import authRouter from "./authRouter.js";
import hashtagsRoutes from "./hashtagsRoutes.js";
import userPost from "./userPostRoutes.js";
import userPageRouter from "./userPageRoutes.js";
import timelineRouter from "./timelineRouter.js";
const router = Router();

router.use(authRouter);
router.use(hashtagsRoutes);
router.use(userPost);
router.use(userPageRouter);
router.use(timelineRouter);
export default router;
