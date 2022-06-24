import db from "../db/index.js";

const getPostsRepostsByUserIdFollows = async (userId) => {
    return await db.query(
        `--sql
    SELECT p.id, u.id AS "userId", u.username, u."pictureUrl" as "userPic", p.article, p.link, COUNT(reposts.*) AS "repostsCount", 
    p."createdAt", false AS "isRepost", null AS "repostedBy" 
    FROM posts p
        JOIN users u ON u.id = p."userId"
        LEFT JOIN reposts ON reposts."postId" = p.id
        WHERE u.id IN (SELECT "userId" FROM followers WHERE "followerId" = $1)
    GROUP BY p.id, reposts."postId", u.id
    UNION ALL 
        SELECT p.id, u1.id AS "userId", u1."username", u1."pictureUrl", p.article, p.link, r1."repostsCount", r."createdAt",
            true AS "isRepost", u2.username AS "repostedBy" 
        FROM posts p
            JOIN reposts r ON r."postId" = p.id
            JOIN (
                SELECT COUNT(reposts.id) AS "repostsCount", reposts."postId"
                FROM reposts
                JOIN posts ON reposts."postId" = posts.id
                GROUP BY posts.id, reposts."postId"
                ) r1 ON r1."postId" = p.id
            JOIN users u1 ON u1.id = p."userId"
            JOIN users u2 ON u2.id = r."userId"
        WHERE u2.id IN (SELECT "userId" FROM followers WHERE "followerId" = $1)
        ORDER BY "createdAt" DESC 
        LIMIT 10;
    `,
        [userId],
    );
};

const timelineRepository = {
    getPostsRepostsByUserIdFollows,
};

export default timelineRepository;
