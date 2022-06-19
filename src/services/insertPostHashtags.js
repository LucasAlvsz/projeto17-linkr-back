import hashtagsRepository from "../repositories/hashtagsRepository.js";

const insertPostHashtags = (postId, hashtagIds) => {
    hashtagsRepository.insertManyPostHashtags(ps);
};

export default insertPostHashtags;
