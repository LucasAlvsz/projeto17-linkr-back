import {
    likeMessageQuery,
    unlikeMessageQuery,
} from "../repositories/likeRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const likeMessage = async (req, res) => {
    const { postId } = req.body;
    const userId = res.locals.userData;
    const hasLiked = req.hasLiked;
    try {
        if (hasLiked) {
            unlikeMessageQuery(userId, postId);
            console.log("unliked");
            res.sendStatus(200);
        } else {
            likeMessageQuery(userId, postId);
            console.log("liked");
            res.sendStatus(200);
        }
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};
