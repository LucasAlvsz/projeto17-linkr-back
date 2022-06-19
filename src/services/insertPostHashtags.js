import hashtagsRepository from "../repositories/hashtagsRepository.js";

const insertPostHashtags = (postId, hashtagIds) => {
    hashtagsRepository.insertManyPostHashtags(postId, hashtagIds);
};

export default insertPostHashtags;
