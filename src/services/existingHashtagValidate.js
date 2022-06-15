import hashtagsRepository from "../repositories/hashtagsRepository.js";
import verboseLog from "../utils/verboseLog.js";

const existingHashtagValidate = async (hashtag) => {
    try {
        const result = await hashtagsRepository.getHashtagByName(hashtag);
        if (result.rows.length) return true;
        return false;
    } catch (err) {
        verboseLog(err);
        return -1;
    }
};

export default existingHashtagValidate;
