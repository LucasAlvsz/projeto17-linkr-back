import jwt from "jsonwebtoken";

const JWTVerify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

export default JWTVerify;
