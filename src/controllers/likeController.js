import {
    getLikesQuery,
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
            res.sendStatus(202);
        } else {
            likeMessageQuery(userId, postId);
            res.sendStatus(202);
        }
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};

export const getLikes = async (req, res) => {
    try {
        const likes = (await getLikesQuery()).rows;
        res.status(200).send(likes);
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};
