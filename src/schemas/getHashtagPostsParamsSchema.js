import joi from "joi";

const getHashtagPostsParamsSchema = joi.object({
    hashtag: joi.string().required(),
});

export default getHashtagPostsParamsSchema;
