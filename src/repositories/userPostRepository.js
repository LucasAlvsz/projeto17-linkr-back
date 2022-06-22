import db from "../db/index.js";

const insertPost = async (data) => {
    return await db.query(
        `--sql
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

const updatePost = async ({ url, article, postId, userId }) => {
    return await db.query(
        `--sql
        UPDATE posts
        SET link = $1, article = $2
        WHERE id = $3 AND "userId" = $4
    `,
        [url, article, postId, userId],
    );
};

const userPostRepository = {
    insertPost,
    deletePost,
    updatePost,
};
export default userPostRepository;
