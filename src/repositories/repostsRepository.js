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

const repostRepository = {
    insertRepost,
};

export default repostRepository;
