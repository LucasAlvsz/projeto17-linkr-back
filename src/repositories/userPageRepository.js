import db from "../db/index.js";

const getUserPostsById = async (userId) => {
    return await db.query(
        `--sql
        SELECT posts.id,
        users.id AS "userId", 
        posts.link,
        posts.article,
        posts."createdAt",
        users.username, 
        users."pictureUrl" AS "userpic",
        COUNT(likes."postId") AS "likes"
        FROM posts
        LEFT JOIN likes ON likes."postId" = posts.id
        JOIN users ON posts."userId" = users.id
        WHERE users.id = $1
        GROUP BY posts.id, users.id
    `,
        [userId],
    );
};

const getUserById = async (userId) => {
    const { rows } = await db.query(
        `--sql
    SELECT users.id, users.username, users."pictureUrl" AS "userpic" FROM users WHERE id = $1`,
        [userId],
    );
    return rows[0];
};

const getListOfUsersSearchBar = async (search) => {
    const { rows } = await db.query(
        `--sql
        SELECT users.id, users.username, users."pictureUrl" AS userpic 
        FROM users
        WHERE username ILIKE $1`,
        [`${search}%`],
    );
    return rows;
};

const getListOfFollowersSearchBar = async (search, userId) => {
    const { rows } = await db.query(
        `--sql
        SELECT u2.username, u2.id, u2."pictureUrl" AS userpic FROM followers
        JOIN users u2 ON "userId" = u2.id
        JOIN users u1 ON "followerId" = u1.id
        WHERE u1.id = ${userId} AND u2.username ILIKE $1`,
        [`${search}%`],
    );
    return rows;
};

const getListOfUsersFollowing = async (userIdStorage, userIdPage) => {
    const { rows } = await db.query(
        `--sql
        SELECT u2.username, u2.id, u2."pictureUrl" AS userpic FROM followers
        JOIN users u2 ON "userId" = u2.id
        JOIN users u1 ON "followerId" = u1.id
        WHERE u1.id = $1 AND u2.id = $2`,
        [`${userIdStorage}`, `${userIdPage}`],
    );
    return rows;
};

const deleteFollow = async (userIdStorage, userIdPage) => {
    await db.query(
        `--sql
    DELETE FROM followers WHERE "userId" = $1 AND "followerId" = $2`,
        [userIdPage, userIdStorage],
    );
};

const insertFollow = async (userIdStorage, userIdPage) => {
    db.query(
        `--sql
    INSERT INTO followers ("userId", "followerId") VALUES ($1, $2)`,
        [userIdPage, userIdStorage],
    );
};

const userPageRepository = {
    getUserPostsById,
    getUserById,
    getListOfUsersSearchBar,
    getListOfFollowersSearchBar,
    getListOfUsersFollowing,
    deleteFollow,
    insertFollow,
};

export default userPageRepository;
