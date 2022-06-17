import { hasLikedQuery } from "../repositories/likeRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const hasLikedMiddleware = async (req, res, next) => {
    const { postId } = req.body;
    try {
        const like = (await hasLikedQuery(1, postId)).rows[0];
        req.hasLiked = like;
        if (like) req.hasLiked = like;
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
    next();
};
