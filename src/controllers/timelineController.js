import verboseLog from "../utils/verboseLog.js";
import timelineRepository from "../repositories/timelineRepository.js";
import joinUrlMetadataWithPostData from "../services/joinUrlMetadataWithPostData.js";
export const CatchingPosts = async (req, res) => {
    // const user = res.locals.user;
    try {
        const results = await timelineRepository.CatchingPost();
        const formattedPosts = await joinUrlMetadataWithPostData(results.rows);

        res.status(200).send(formattedPosts);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
