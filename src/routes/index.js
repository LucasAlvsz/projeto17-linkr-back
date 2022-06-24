import { Router } from "express";

import authRouter from "./authRouter.js";
import hashtagsRoutes from "./hashtagsRoutes.js";
import userPost from "./userPostRoutes.js";
import userPageRouter from "./userPageRoutes.js";
import likeRouter from "./likeRouter.js";
import timelineRouter from "./timelineRouter.js";
import commentsRouter from "./commentsRouter.js";
import repostsRouter from "./repostsRouter.js";

const router = Router();

router.use(authRouter);
router.use(hashtagsRoutes);
router.use(userPost);
router.use(userPageRouter);
router.use(likeRouter);
router.use(timelineRouter);
router.use(commentsRouter);
router.use(repostsRouter);

export default router;
