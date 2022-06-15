import db from "../db/index.js";

const getTrending = async () => {
    return await db.query(`--sql
    SELECT hashtags.* FROM hashtags
        LEFT JOIN "postHashtag" ON "postHashtag"."hashtagId" = hashtags.id
    GROUP BY hashtags.id
    ORDER BY COUNT("postHashtag"."hashtagId") DESC 
    LIMIT 10
    `);
};

const hashtagsRepository = {
    getTrending,
};

export default hashtagsRepository;
