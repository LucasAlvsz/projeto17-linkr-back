import db from "../db/index.js";

const getUserPostsById = async (userId) => {
    return await db.query(
        `--sql
    SELECT posts.id,
    users.id AS "userId", 
    posts.link,
    posts.article,
    posts."createdAt",
    users.username, 
    users."pictureUrl" AS "userpic"
    FROM posts
    JOIN users ON posts."userId" = users.id
    WHERE users.id = $1
    `,
        [userId],
    );
};

const getUserById = async (userId) => {
    const { rows } = await db.query(
        `--sql
    SELECT users.id, users.username, users."pictureUrl" AS "userpic" FROM users WHERE id = $1`,
        [userId],
    );
    return rows[0];
};

const userPageRepository = {
    getUserPostsById,
    getUserById,
};

export default userPageRepository;
