import likeRepository from "../repositories/likeRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const likePost = async (req, res) => {
    const { postId } = req.params;
    const userId = res.locals.userData;
    const hasLiked = res.locals.hasLiked;
    try {
        if (hasLiked) likeRepository.unlikePost(userId, postId);
        else likeRepository.likePost(userId, postId);
        res.sendStatus(202);

    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};
