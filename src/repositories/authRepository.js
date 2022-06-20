import db from "../db/index.js";

const selectUserByEmail = async (email) => {
    return await db.query(`
        SELECT *
        FROM users
        WHERE email = $1
    `, [email]);
};

const insertNewUser = async (signUpData) => {
    const { email, password, username, pictureUrl } = signUpData;
    
    return await db.query(`
        INSERT INTO users (email, password, username, "pictureUrl")
        VALUES ($1, $2, $3, $4)
    `, [email, password, username, pictureUrl]);
};

const authRepository = {
    insertNewUser,
    selectUserByEmail
};

export default authRepository;