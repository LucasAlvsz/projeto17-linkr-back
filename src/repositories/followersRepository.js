import db from "../db/index.js";

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

const getListOfUsersIdFollowing = async (userIdStorage) => {
    return await db.query(
        `--sql
        SELECT "userId" FROM followers
        WHERE "followerId" = $1`,
        [`${userIdStorage}`],
    );
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

const followersRepository = {
    getListOfFollowersSearchBar,
    getListOfUsersFollowing,
    deleteFollow,
    insertFollow,
    getListOfUsersIdFollowing,
};

export default followersRepository;
