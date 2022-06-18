import userPostRepository from "../repositories/userPostRepository.js";
import verboseLog from "../utils/verboseLog.js";
export const PostUser = async (req, res) => {
    // const infoUser = res.locals.userData;
    let userId = 5;
    const data = { ...req.body, userId };
    try {
        const makePost = userPostRepository.insertPost(data);
        res.status(200).send(makePost);
    } catch (e) {
        verboseLog(e);
        res.sendStatus(500);
    }
};
