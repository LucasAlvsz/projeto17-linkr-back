import verboseLog from "../utils/verboseLog.js";
import userPageRepository from "../repositories/userPageRepository.js";

export const getUserPageData = async (req, res) => {
    const { id } = req.params;
    try {
        const userPosts = await userPageRepository.getUserPostsById(id);
        res.send({ userPosts });
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
