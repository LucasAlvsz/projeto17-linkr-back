import userPostRepository from "../repositories/userPostRepository.js";
import verboseLog from "../utils/verboseLog.js";

export const postUser = async (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).send("Token nao encontrado");
    // const token = authorization.replace("Bearer", "").trim();
    let userId = 5; // will get caught by jwt
    const data = { ...req.body, userId };
    try {
        const makePost = userPostRepository.insertPost(data);
        res.status(200).send(makePost);
    } catch (e) {
        verboseLog(e);
        res.sendStatus(500);
    }
};
