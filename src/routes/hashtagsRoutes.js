import { Router } from "express";

import { getTrending } from "../controllers/hashtagsController.js";

const hashtagsRouter = Router();

hashtagsRouter.get("/trending", getTrending);

export default hashtagsRouter;
