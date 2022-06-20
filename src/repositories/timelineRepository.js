import db from "../db/index.js";

const CatchingPost = async () => {
    return await db.query(`
        --sql
        SELECT posts.id,
        users.id AS "userId", 
        posts.link,
        posts.article,
        posts."createdAt",
        users.username, 
        users."pictureUrl" AS "userpic",
        COUNT(likes.id) AS "likes"
        FROM posts
        LEFT JOIN likes ON likes."postId" = posts.id
        JOIN users ON posts."userId" = users.id
        GROUP BY posts.id, users.id
        ORDER BY id DESC
        LIMIT 20
    `);
};

const timelineRepository = {
    CatchingPost,
};

export default timelineRepository;
