import db from "../db/index.js";

const selectUserByEmail = async (email) => {
    return await db.query(`
        SELECT email
        FROM users
        WHERE email = $1
    `, [email]);
};

const insertNewUser = async (signUpData) => {
    //falta o pictureUrl
    const { email, password, username } = signUpData;
    
    return await db.query(`
        INSERT INTO users (email, password, name)
        VALUES ($1, $2, $3)
    `, [email, password, username]);
};

const authRepository = {
    insertNewUser,
    selectUserByEmail
};

export default authRepository;