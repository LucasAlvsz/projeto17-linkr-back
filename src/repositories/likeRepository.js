import db from "../db/index.js";

export const hasLikedQuery = async (userId, postId) => {
    return await db.query(
        `
        SELECT * FROM likes WHERE "userId" = $1 AND "postId" = $2`,
        [userId, postId],
    );
};

export const likeMessageQuery = async (userId, postId) => {
    db.query(
        `--sql
        INSERT INTO likes ("userId", "postId") VALUES ($1, $2)`,
        [userId, postId],
    );
};

export const unlikeMessageQuery = async (userId, postId) => {
    db.query(
        `--sql
    DELETE FROM likes WHERE "userId" = $1 AND "postId" = $2`,
        [userId, postId],
    );
};

export const getLikesQuery = async () => {
    return await db.query(`--sql 
    SELECT likes.id, users."username", likes."userId", likes."postId" FROM likes
    JOIN users ON users.id = likes."userId"
    ORDER BY "postId" DESC`);
};

export const deleteLikeQuery = async (postId) => {
    db.query(
        `--sql
        DELETE FROM likes WHERE "postId" = $1`,
        [postId],
    );
};
