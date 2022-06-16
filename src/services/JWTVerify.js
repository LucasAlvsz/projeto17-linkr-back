import jwt from "jsonwebtoken";

export const JWTVerify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

export default JWTVerify;
