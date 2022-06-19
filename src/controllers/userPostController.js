import userPostRepository from "../repositories/userPostRepository.js";
import verboseLog from "../utils/verboseLog.js";
import findOrCreateHashtag from "../services/findOrCreateHashtag.js";
import hashtagsRepository from "../repositories/hashtagsRepository.js";
export const PostUser = async (req, res) => {
    // const infoUser = res.locals.userData;
    let userId = 5;
    const data = { ...req.body, userId };
    try {
        const resultMakePost = (await userPostRepository.insertPost(data)).rows;
        const hashtagsId = await findOrCreateHashtag(data);
        if (hashtagsId === -1) return res.sendStatus(500);
        hashtagsRepository.insertManyPostHashtags(
            resultMakePost[0],
            hashtagsId,
        );
        res.sendStatus(201);
    } catch (e) {
        verboseLog(e);
        res.sendStatus(500);
    }
};
