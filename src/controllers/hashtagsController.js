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
