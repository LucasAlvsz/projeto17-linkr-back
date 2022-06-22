import verboseLog from "../utils/verboseLog.js";
import timelineRepository from "../repositories/timelineRepository.js";
import joinUrlMetadataAndCommentsWithPostData from "../services/joinUrlMetadataAndCommentsWithPostData.js";
export const catchingPosts = async (req, res) => {
    try {
        const results = await timelineRepository.catchingPost();
        const formattedPosts = await joinUrlMetadataAndCommentsWithPostData(
            results.rows,
        );

        res.status(200).send(formattedPosts);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
