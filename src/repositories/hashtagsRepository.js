import db from "../db/index.js";

const getHashtagByName = (name) => {
    return db.query("SELECT * FROM hashtags WHERE name ~* $1", [name]);
};

const getTrending = async () => {
    return await db.query(`--sql
        SELECT hashtags.* FROM hashtags
            LEFT JOIN "postHashtag" ON "postHashtag"."hashtagId" = hashtags.id
        GROUP BY hashtags.id
        ORDER BY COUNT("postHashtag"."hashtagId") DESC 
        LIMIT 10
    `);
};

const getHashtagPosts = async (hashtag) => {
    return await db.query(
        `--sql
        SELECT posts.* FROM "postHashtag"
            JOIN hashtags on hashtags.id = "postHashtag"."hashtagId"
            JOIN posts ON posts.id = "postHashtag"."postId"
        WHERE hashtags.name ~* $1
        GROUP BY posts.id
        `,
        [hashtag],
    );
};

const hashtagsRepository = {
    getHashtagByName,
    getTrending,
    getHashtagPosts,
};

export default hashtagsRepository;
