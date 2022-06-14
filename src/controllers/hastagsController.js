import db from "../db/index.js";
import verboseLog from "../utils/verboseLog.js";

export const getHashtags = async (req, res) => {
    const { hashtag } = req.params;
    try {
        const result = await db.query(
            `--sql
            SELECT * FROM hashtags WHERE hashtag = $1`,
            [hashtag],
        );
        res.send(result.rows);
    } catch (err) {
        verboseLog(err);
        res.send(err);
    }
};
