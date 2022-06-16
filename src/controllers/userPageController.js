import verboseLog from "../utils/verboseLog.js";
import userPageRepository from "../repositories/userPageRepository.js";
import urlMetadata from "url-metadata";

export const getUserPageData = async (req, res) => {
    const { id } = req.params;
    try {
        const user = res.locals.user;
        const posts = await userPageRepository.getUserPostsById(id);
        const postsMetadata = [];
        const getMetadataUrl = async () => {
            for (const post of posts) {
                const metadata = await urlMetadata(post.link);
                postsMetadata.push({
                    postTitle: metadata.title,
                    postUrl: metadata.url,
                    postDescription: metadata.description,
                    postImage: metadata.image,
                });
            }
        };
        await getMetadataUrl();
        res.send({ user: user.name, posts: postsMetadata });
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
