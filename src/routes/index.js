import { Router } from "express";

import hashtagsRoutes from "./hashtagsRoutes.js";
import userPost from "./userPostRoutes.js";
import userPageRouter from "./userPageRoutes.js";

const router = Router();

router.use(hashtagsRoutes);
router.use(userPost);
router.use(userPageRouter);

export default router;
