import jwt from "jsonwebtoken";

const JWTGenerator = data => {
    return jwt.sign(data, process.env.JWT_SECRET);
};

export default JWTGenerator;