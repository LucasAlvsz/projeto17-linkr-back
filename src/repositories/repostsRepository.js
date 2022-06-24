import db from "../db/index.js";

export const insertRepost = async (userId, postId) => {
    return await db.query(
        `--sql
        INSERT INTO reposts ("userId", "postId") VALUES ($1, $2)
        RETURNING *
        `,
        [userId, postId],
    );
};

export const userAlreadyRepostedPost = async (userId, postId) => {
    return await db.query(
        `--sql
        SELECT * FROM reposts WHERE "userId" = $1 AND "postId" = $2
        `,
        [userId, postId],
    );
};

const repostRepository = {
    insertRepost,
    userAlreadyRepostedPost,
};

export default repostRepository;
