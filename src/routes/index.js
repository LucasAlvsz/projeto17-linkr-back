import { Router } from "express";

import hashtagsRoutes from "./hashtagsRoutes.js";

const router = Router();

router.use(hashtagsRoutes);

export default router;
