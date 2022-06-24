import db from "../db/index.js";

export const hasLiked = async (userId, postId) => {
    return await db.query(
        `
        SELECT * FROM likes WHERE "userId" = $1 AND "postId" = $2`,
        [userId, postId],
    );
};

export const likeMessage = async (userId, postId) => {
    return await db.query(
        `--sql
        INSERT INTO likes ("userId", "postId") VALUES ($1, $2)`,
        [userId, postId],
    );
};

export const unlikeMessage = async (userId, postId) => {
    return await db.query(
        `--sql
    DELETE FROM likes WHERE "userId" = $1 AND "postId" = $2`,
        [userId, postId],
    );
};

export const getLikes = async () => {
    return await db.query(`--sql 
    SELECT likes.id, users."username", likes."userId", likes."postId" FROM likes
    JOIN users ON users.id = likes."userId"
    ORDER BY "postId" DESC`);
};

export const deleteLikeByPostId = async (postId) => {
    return await db.query(
        `--sql
        DELETE FROM likes WHERE "postId" = $1`,
        [postId],
    );
};

const likeRepository = {
    hasLiked,
    likeMessage,
    unlikeMessage,
    getLikes,
    deleteLikeByPostId,
};

export default likeRepository;
