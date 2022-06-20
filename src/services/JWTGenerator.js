import jwt from "jsonwebtoken";

export const JWTGenerator = data => {
    return jwt.sign(data, process.env.JWT_SECRET);
};

export default JWTGenerator;