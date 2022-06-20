import getMetadataUrl from "./getMetadataUrl.js";
import verboseLog from "../utils/verboseLog.js";

const joinUrlMetadataWithPostData = async (posts) => {
    try {
        const formattedPosts = await Promise.all(
            posts.map(async (post) => {
                const urlMetadata = await getMetadataUrl(post.link);
                if (urlMetadata === -1) return -1;
                return {
                    ...post,
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

export default joinUrlMetadataWithPostData;
