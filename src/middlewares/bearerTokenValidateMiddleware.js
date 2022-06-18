import JWTVerify from "../services/JWTVerify.js";
import bearerTokenHeadersSchema from "../schemas/bearerTokenHeadersSchema.js";
import verboseLog from "../utils/verboseLog.js";

const bearerTokenValidateMiddleware = (req, res, next) => {
    const { error } = bearerTokenHeadersSchema.validate(req.headers, {
        abortEarly: false,
    });
    if (error)
        return res
            .status(401)
            .send(error.details.map(({ message }) => message));
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = JWTVerify(token);
        res.locals.userData = userData;
        next();
    } catch (err) {
        verboseLog(err);
        return res.sendStatus(401);
    }
};

export default bearerTokenValidateMiddleware;
