import repostsRepository from "../repositories/repostsRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const newRepost = async (req, res) => {
    const userId = res.locals.userData;
    const postId = req.params.postId;
    try {
        const alreadyRepostedPost =
            await repostsRepository.userAlreadyRepostedPost(userId, postId);
        if (alreadyRepostedPost.rows.length) return res.sendStatus(204);
        const result = (await repostsRepository.insertRepost(userId, postId))
            .rows;
        if (!result.length) return res.sendStatus(404);

        res.status(201);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
