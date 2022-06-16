import authRepository from "../repositories/authRepository.js";
import verboseLog from "../utils/verboseLog.js";


export const postSignUp = async (req, res) => {
    try {
        const signUpData = req.body;

        await authRepository.insertNewUser(signUpData);

        res.sendStatus(201);
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};

export const postSignIn = (req, res) => {
    try {
        res.send("teste signin");
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }
};