import followersRepository from "../repositories/followersRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const getFollowersIds = async (req, res) => {
    const userId = res.locals.userData;
    try {
        const { rows } = await followersRepository.getListOfUsersIdFollowing(
            userId,
        );
        res.send(rows);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
