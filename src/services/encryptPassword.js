import bcrypt from "bcrypt";

export const encryptPassword = password => {
    return bcrypt.hashSync(password, 10);
};

export default encryptPassword;