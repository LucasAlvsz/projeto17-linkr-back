import commentsRepository from "../repositories/commentsRepository.js";
import likeRepository from "../repositories/likeRepository.js";
import getMetadataUrl from "./getMetadataUrl.js";
import verboseLog from "../utils/verboseLog.js";

const joinUrlMetadataCommentsAndLikesWithPostData = async (userId, posts) => {
    try {
        const formattedPosts = await Promise.all(
            posts.map(async (post) => {
                const comments = (
                    await commentsRepository.getCommentsByPostId(post.id)
                ).rows;
                const countLikes = (
                    await likeRepository.getCountLikesByPostId(post.id)
                ).rows[0];
                const likes = (
                    await likeRepository.getLikesByPostId(userId, post.id)
                ).rows;
                const urlMetadata = await getMetadataUrl(post.link);
                let hasLiked = (await likeRepository.hasLiked(userId, post.id))
                    .rows;
                if (hasLiked.length) hasLiked = true;
                else hasLiked = false;
                if (urlMetadata === -1)
                    throw new Error("Error in getMetadataUrl");
                return {
                    ...post,
                    comments,
                    hasLiked,
                    likes,
                    ...countLikes,
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

export default joinUrlMetadataCommentsAndLikesWithPostData;
