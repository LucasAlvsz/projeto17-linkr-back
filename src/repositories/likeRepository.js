import db from "../db/index.js";

export const hasLiked = async (userId, postId) => {
    return await db.query(
        `--sql
        SELECT * FROM likes WHERE "userId" = $1 AND "postId" = $2`,
        [userId, postId],
    );
};

export const likePost = async (userId, postId) => {
    return await db.query(
        `--sql
        INSERT INTO likes ("userId", "postId") VALUES ($1, $2)`,
        [userId, postId],
    );
};

export const unlikePost = async (userId, postId) => {
    return await db.query(
        `--sql
    DELETE FROM likes WHERE "userId" = $1 AND "postId" = $2`,
        [userId, postId],
    );
};

export const getLikesByPostId = async (userId, postId) => {
    return await db.query(
        `--sql 
        SELECT users."username", users.id
        FROM likes
            JOIN users ON users.id = likes."userId"
        WHERE likes."postId" = $2 AND users.id != $1
        LIMIT 2
    `,
        [userId, postId],
    );
};

export const getCountLikesByPostId = async (postId) => {
    return await db.query(
        `--sql
        SELECT COUNT(*) AS "countLikes"
        FROM likes
        WHERE "postId" = $1`,
        [postId],
    );
};

export const deleteLikesByPostId = async (postId) => {
    return await db.query(
        `--sql
        DELETE FROM likes WHERE "postId" = $1`,
        [postId],
    );
};

const likeRepository = {
    hasLiked,
    likePost,
    unlikePost,
    getLikesByPostId,
    getCountLikesByPostId,
    deleteLikesByPostId,
};

export default likeRepository;
