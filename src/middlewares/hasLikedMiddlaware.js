import likeRepository from "../repositories/likeRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const hasLikedMiddleware = async (req, res, next) => {
    if (!req.params.postId)
        return res.status(400).send("Missing postId in request");
    const { postId } = req.params;
    const userId = res.locals.userData;
    try {
        const like = (await likeRepository.hasLiked(userId, postId)).rows[0];
        res.locals.hasLiked = like;

    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
    next();
};
