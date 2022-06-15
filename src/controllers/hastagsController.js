import hashtagsRepository from "../repositories/hashtagsRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const getTranding = async (req, res) => {
    try {
        const result = await hashtagsRepository.getTranding();
        res.send(result.rows);
    } catch (err) {
        verboseLog(err);
        res.send(err);
    }
};
