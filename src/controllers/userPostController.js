import userPostRepository from "../repositories/userPostRepository.js";
import verboseLog from "../utils/verboseLog.js";
import JWTVerify from "../services/JWTVerify.js";
export const PostUser = async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Token nao encontrado");
    const token = authorization.replace("Bearer", "").trim();
    const dataUser = JWTVerify(token);
    // tem que colocar o service que pega as #
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
