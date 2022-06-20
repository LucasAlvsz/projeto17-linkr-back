import authRepository from "../repositories/authRepository.js";
import verboseLog from "../utils/verboseLog.js";

const emailConflictMiddleware = async (req, res, next) => {
    try {
        const { email } = req.body;
        const { rows: usersByEmail } = await authRepository.selectUserByEmail(
            email,
        );

        if (usersByEmail.length > 0)
            return res
                .status(409)
                .send("This emails has already been registered");
    } catch (error) {
        verboseLog(error);
        res.sendStatus(500);
    }

    return next();
};

export default emailConflictMiddleware;
