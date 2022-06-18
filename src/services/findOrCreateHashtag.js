import hashtagsRepository from "../repositories/hashtagsRepository.js";

export const findOrCreateHashtag = async (data) => {
    const splittedWords = data.article.split(" ");
    const hashtags = splittedWords.filter((word) => word.startsWith("#"));
    const hashtagWithoutHash = hashtags.map((hashtag) =>
        hashtag.replace("#", ""),
    );
    const hashtagsInDb = (await hashtagsRepository.getAllHashtag()).rows;
    let buildQuery = "";
    const hashtagIds = [];
    hashtagWithoutHash.forEach((hashtag, i) => {
        const lastIndex = hashtagWithoutHash.length - 1;
        const isInDb = hashtagsInDb.some(
            (dbHashtag) => dbHashtag.name === hashtag,
        );

        if (isInDb) { hashtag.id } 

        if (!isInDb) buildQuery += `('${hashtag}'), `;
        if (i === lastIndex) buildQuery = buildQuery.slice(0, -2);
    });
    if (buildQuery) hashtagsRepository.insertManyHashtags(buildQuery);
};
