import {
    likeMessageQuery,
    unlikeMessageQuery,
} from "../repositories/likeRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const likeMessage = async (req, res) => {
    const { postId } = req.body;
    const like = req.hasLiked;
    try {
        if (like) {
            unlikeMessageQuery(1, postId);
            res.sendStatus(200);
        } else {
            likeMessageQuery(1, postId);
            res.sendStatus(200);
        }
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};

export const unlikeMessage = async (req, res) => {};
