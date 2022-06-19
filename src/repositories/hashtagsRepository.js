import db from "../db/index.js";
import formatPostHashtagQuery from "../utils/formatPostHashtagQuery.js";

const getAllHashtag = async () => {
    return await db.query("SELECT * FROM hashtags");
};

const getHashtagByName = (name) => {
    return db.query("SELECT * FROM hashtags WHERE name ~* $1", [name]);
};

const getTrending = async () => {
    return await db.query(`--sql
        SELECT hashtags.* FROM hashtags
            LEFT JOIN "postHashtag" ON "postHashtag"."hashtagId" = hashtags.id
        GROUP BY hashtags.id
        HAVING COUNT("postHashtag"."hashtagId") > 0
        ORDER BY COUNT("postHashtag"."hashtagId") DESC 
        LIMIT 10
    `);
};

const getHashtagPosts = async (hashtag) => {
    return await db.query(
        `--sql
        SELECT posts.*, users.username, users."pictureUrl" AS userPic FROM "postHashtag"
            JOIN hashtags on hashtags.id = "postHashtag"."hashtagId"
            JOIN posts ON posts.id = "postHashtag"."postId"
            JOIN users ON users.id = posts."userId"
        WHERE hashtags.name ~* $1
        GROUP BY posts.id, username, users."pictureUrl" 
        `,
        [hashtag],
    );
};
const insertManyHashtags = async (names) => {
    return (await db.query(`INSERT INTO hashtags (name) VALUES ${names}`)).rows;
};
const insertManyPostHashtags = async (postId, hashtagsIds) => {
    const buildedQuery = formatPostHashtagQuery(postId, hashtagsIds);
    await db.query(
        `--sql
        INSERT INTO "postHashtag" ("postId", "hashtagId") 
        VALUES ${buildedQuery}
        `,
    );
};
const hashtagsRepository = {
    getHashtagByName,
    getTrending,
    getHashtagPosts,
    getAllHashtag,
    insertManyHashtags,
    insertManyPostHashtags,
};

export default hashtagsRepository;
