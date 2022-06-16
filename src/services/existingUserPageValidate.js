import userPageRepository from "../repositories/userPageRepository.js";
import verboseLog from "../utils/verboseLog.js";

const existingUserPageValidate = async (userId) => {
    try {
        const result = await userPageRepository.getUserById(userId);
        if (result) return true;
        return false;
    } catch (err) {
        verboseLog(err);
        return -1;
    }
};

export default existingUserPageValidate;
