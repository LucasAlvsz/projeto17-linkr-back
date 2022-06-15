import db from "../db/index.js";

const getTranding = async () => {
    return await db.query(`--sql
    SELECT hashtags.*, COUNT("postHashtag"."hashtagId") as ordernation FROM hashtags
        JOIN "postHashtag" ON "postHashtag"."hashtagId" = hashtags.id
    GROUP BY hashtags.id
    ORDER BY ordernation DESC
    LIMIT 10
    `);
};

const hashtagsRepository = {
    getTranding,
};

export default hashtagsRepository;
