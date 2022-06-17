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

        // const postUrlMetadata = [];
        // for (const post of posts) {
        //     const urlMetadata = await getMetadataUrl(post.link);
        //     const
        // }
        // return postUrlMetadata;
    } catch (err) {
        verboseLog(err);
        return -1;
    }
};

export default joinUrlMetadataWithPostData;
