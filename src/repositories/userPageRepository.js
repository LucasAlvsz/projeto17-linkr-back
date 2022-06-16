import db from "../db/index.js";

const getUserPostsById = async (userId) => {
    const { rows } = await db.query(
        `--sql
    SELECT posts.link, posts.article, 
    users.name as "userName"
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
    SELECT users.id FROM users WHERE id = $1`,
        [userId],
    );
    return rows[0];
};

const userPageRepository = {
    getUserPostsById,
    getUserById,
};

export default userPageRepository;
