import db from "../db/index.js";

const insertPost = async (data) => {
    return await db.query(
        `
        INSERT INTO posts ("userId",link,article)
        VALUES ($1,$2,$3)
        RETURNING id;
    `,
        [data.userId, data.url, data.article],
    );
};

const deletePost = async (userId, postId) => {
    return await db.query(
        `--sql
        DELETE FROM posts
        WHERE id = $1 AND "userId" = $2
    `,
        [postId, userId],
    );
};

const userPostRepository = {
    insertPost,
    deletePost,
};
export default userPostRepository;
