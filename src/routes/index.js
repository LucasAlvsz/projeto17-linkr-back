import { Router } from "express";

import hashtagsRoutes from "./hashtagsRoutes.js";
import userPost from "./userPostRoutes.js";

const router = Router();

router.use(hashtagsRoutes);
router.use(userPost);

export default router;
