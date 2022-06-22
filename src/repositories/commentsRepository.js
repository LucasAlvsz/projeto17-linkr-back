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

const commentsRepository = {
    insertComment,
    getCommentsByPostId,
};

export default commentsRepository;
