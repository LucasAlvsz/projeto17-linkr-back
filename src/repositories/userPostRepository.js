import db from "../db/index.js";

const insertPost = async (data) => {
    return await db.query(
        `
        INSERT INTO posts ("userId",link,article)
        VALUES ($1,$2,$3);
    `,
        [data.userId, data.url, data.article],
    );
};
const userPostRepository = {
    insertPost,
};
export default userPostRepository;
