import likeRepository from "../repositories/likeRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const hasLikedMiddleware = async (req, res, next) => {
    const { postId } = req.body;
    const userId = res.locals.userData;
    try {
        const like = (await likeRepository.hasLiked(userId, postId)).rows[0];
        req.hasLiked = like;
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
    next();
};
