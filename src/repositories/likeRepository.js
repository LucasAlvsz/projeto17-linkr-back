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
        `
        INSERT INTO likes ("userId", "postId") VALUES ($1, $2)`,
        [userId, postId],
    );
};

export const unlikeMessageQuery = async (userId, postId) => {
    db.query(`
    DELETE FROM likes WHERE "userId" = $1 AND "postId" = $2`, [
        userId,
        postId,
    ]);
};
