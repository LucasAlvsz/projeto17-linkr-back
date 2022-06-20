import userPostRepository from "../repositories/userPostRepository.js";
import verboseLog from "../utils/verboseLog.js";
import findOrCreateHashtag from "../services/findOrCreateHashtag.js";
import hashtagsRepository from "../repositories/hashtagsRepository.js";

export const PostUser = async (req, res) => {
    const userId = res.locals.userData;
    const data = { ...req.body, userId };
    try {
        const resultMakePost = (await userPostRepository.insertPost(data)).rows;
        const hashtagsId = await findOrCreateHashtag(data);
        if (hashtagsId === -1) return res.sendStatus(500);
        if (hashtagsId === 0) return res.sendStatus(201);
        hashtagsRepository.insertManyPostHashtags(
            resultMakePost[0],
            hashtagsId,
        );
        res.sendStatus(201);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};

export const deletePost = async (req, res) => {
    const userId = res.locals.userData;
    const postId = req.params.postId;
    try {
        const result = await userPostRepository.deletePost(userId, postId);
        if (result.rowCount === 0) return res.sendStatus(404);
        await hashtagsRepository.deletePostHashtags(postId);
        res.sendStatus(200);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
