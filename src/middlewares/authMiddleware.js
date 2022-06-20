import authRepository from "../repositories/authRepository.js";
import verboseLog from "../utils/verboseLog.js";
import bcrypt from "bcrypt";

const authMiddleware =  async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const { rows: usersByEmail } = await authRepository.selectUserByEmail(email);
        const user = usersByEmail[0];
        if (!user) return res.status(404).send("Incorrect email");

        const hash = user.password;
        const isPasswordCorrect = bcrypt.compareSync(password, hash);
        if (!isPasswordCorrect) return res.status(401).send("Incorrect password");
        
        res.locals.user = user;
    } catch (error) {
        verboseLog(error);
        return res.sendStatus(500);
    }

    return next(); 
};

export default authMiddleware;