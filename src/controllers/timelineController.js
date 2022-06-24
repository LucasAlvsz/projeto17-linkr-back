import verboseLog from "../utils/verboseLog.js";
import timelineRepository from "../repositories/timelineRepository.js";
import joinUrlMetadataAndCommentsWithPostData from "../services/joinUrlMetadataAndCommentsWithPostData.js";
export const catchingPosts = async (req, res) => {
    const userId = res.locals.userData;
    try {
        const { rows } =
            await timelineRepository.getPostsRepostsByUserIdFollows(userId);
        const formattedPosts = await joinUrlMetadataAndCommentsWithPostData(
            userId,
            rows,
        );
        if (formattedPosts.length === -1) return res.sendStatus(500);
        res.status(200).send(formattedPosts);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
