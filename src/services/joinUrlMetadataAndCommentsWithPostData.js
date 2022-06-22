import commentsRepository from "../repositories/commentsRepository.js";
import getMetadataUrl from "./getMetadataUrl.js";
import verboseLog from "../utils/verboseLog.js";

const joinUrlMetadataAndCommentsWithPostData = async (posts) => {
    try {
        const formattedPosts = await Promise.all(
            posts.map(async (post) => {
                const comments = (
                    await commentsRepository.getCommentsByPostId(post.id)
                ).rows;
                const urlMetadata = await getMetadataUrl(post.link);
                if (urlMetadata === -1) return -1;
                return {
                    ...post,
                    comments,
                    urlMetadata,
                };
            }),
        );
        return formattedPosts;
    } catch (err) {
        verboseLog(err);
        return -1;
    }
};

export default joinUrlMetadataAndCommentsWithPostData;
