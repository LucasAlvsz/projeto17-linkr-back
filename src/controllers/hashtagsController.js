import joinUrlMetadataWithPostData from "../services/joinUrlMetadataWithPostData.js";
import hashtagsRepository from "../repositories/hashtagsRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const getTrending = async (req, res) => {
    try {
        const result = await hashtagsRepository.getTrending();
        res.send(result.rows);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};

export const getHashtagPosts = async (req, res) => {
    const { hashtag } = req.params;
    try {
        const result = await hashtagsRepository.getHashtagPosts(hashtag);
        const formattedPosts = await joinUrlMetadataWithPostData(result.rows);
        if (formattedPosts === -1) res.sendStatus(500);
        res.send(formattedPosts);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
