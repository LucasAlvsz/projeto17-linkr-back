import db from "../db/index.js";

const getUserPostsById = async (userId) => {
    const { rows } = await db.query(
        `--sql
    SELECT posts.link, 
    users.username as "userName"
    FROM posts
    JOIN users ON posts."userId" = users.id
    WHERE users.id = $1
    `,
        [userId],
    );
    return rows;
};

const getUserById = async (userId) => {
    const { rows } = await db.query(
        `--sql
    SELECT users.id, users.username FROM users WHERE id = $1`,
        [userId],
    );
    return rows[0];
};

const getListOfUsersSearchBar = async (search) => {
    const { rows } = await db.query(
        `--sql
        SELECT users.id, users.username 
        FROM users
        WHERE username ILIKE $1`,
        [`${search}%`],
    );
    return rows;
};

const userPageRepository = {
    getUserPostsById,
    getUserById,
    getListOfUsersSearchBar,
};

export default userPageRepository;
