import hashtagsRepository from "../repositories/hashtagsRepository.js";
import verboseLog from "../utils/verboseLog.js";

const findOrCreateHashtag = async (data) => {
    try {
        const splittedWords = data.article.split(" ");
        const hashtags = splittedWords.filter((word) => word.startsWith("#"));
        if (!hashtags.length) return 0;
        const hashtagWithoutHash = hashtags.map((hashtag) =>
            hashtag.replace("#", ""),
        );
        const hashtagsInDb = (await hashtagsRepository.getAllHashtag()).rows;
        let buildQuery = "";
        const hashtagIds = [];
        hashtagWithoutHash.forEach((hashtag, i) => {
            const lastIndex = hashtagWithoutHash.length - 1;
            const isInDb = hashtagsInDb.find(
                (hashtagDb) => hashtagDb.name === hashtag,
            );

            if (isInDb) hashtagIds.push({ id: isInDb.id });
            if (!isInDb) buildQuery += `('${hashtag}'), `;
            if (i === lastIndex) buildQuery = buildQuery.slice(0, -2);
        });
        if (buildQuery) {
            const hashtagIdsInserted =
                await hashtagsRepository.insertManyHashtags(buildQuery);
            hashtagIds.push(...hashtagIdsInserted);
        }
        return hashtagIds;
    } catch (err) {
        verboseLog(err);
        return -1;
    }
};

export default findOrCreateHashtag;
