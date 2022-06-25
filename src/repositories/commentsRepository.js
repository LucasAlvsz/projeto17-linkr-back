import db from "../db/index.js";

export const insertComment = async (comment, postId, userId) => {
    return await db.query(
        `--sql
        INSERT INTO comments (comment, "postId", "userId")
        VALUES ($1, $2, $3)
        RETURNING *
    `,
        [comment, postId, userId],
    );
};

export const getCommentByCommentId = async (commentId) => {
    return await db.query(
        `--sql
        SELECT comments.*, users.username, users."pictureUrl"
        FROM comments
        JOIN users ON users.id = comments."userId"
        WHERE comments.id = $1
        `,
        [commentId],
    );
};

export const getCommentsByPostId = async (postId) => {
    return await db.query(
        `--sql
        SELECT comments.*, users.username, users."pictureUrl"
        FROM comments
            JOIN users ON comments."userId" = users.id
        WHERE comments."postId" = $1
        ORDER BY comments."createdAt" DESC
    `,
        [postId],
    );
};

export const deleteCommentsByPostIdAndUserId = async (postId, userId) => {
    return await db.query(
        `--sql
        DELETE FROM comments
        WHERE "postId" = $1 AND "userId" = $2
    `,
        [postId, userId],
    );
};

const commentsRepository = {
    insertComment,
    getCommentsByPostId,
    deleteCommentsByPostIdAndUserId,
    getCommentByCommentId,
};

export default commentsRepository;
