import db from "../db/index.js";

const getUserPostsById = async (userId) => {
    const { rows } = await db.query(
        `--sql
        SELECT posts.id,
        users.id AS "userId", 
        posts.link,
        posts.article,
        posts."createdAt",
        users.username, 
        users."pictureUrl" AS "userpic",
        COUNT(likes."postId") AS "likes"
        FROM posts
        LEFT JOIN likes ON likes."postId" = posts.id
        JOIN users ON posts."userId" = users.id
        WHERE users.id = $1
        GROUP BY posts.id, users.id
    `,
        [userId],
    );
    return rows;
};

const getUserById = async (userId) => {
    const { rows } = await db.query(
        `--sql
    SELECT users.id, users.name FROM users WHERE id = $1`,
        [userId],
    );
    return rows[0];
};

const userPageRepository = {
    getUserPostsById,
    getUserById,
};

export default userPageRepository;
