import authRepository from "../repositories/authRepository.js";
import encryptPassword from "../services/encryptPassword.js";
import JWTGenerator from "../services/JWTGenerator.js";
import verboseLog from "../utils/verboseLog.js";

export const postSignUp = async (req, res) => {
    try {
        const signUpData = req.body;

        signUpData.password = encryptPassword(req.body.password);
        await authRepository.insertNewUser(signUpData);

        res.sendStatus(201);
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};

export const postSignIn = (req, res) => {
    try {
        const { user } = res.locals;
        const { id, pictureUrl } = user;

        const token = JWTGenerator(id);
        res.send({token, pictureUrl});
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};