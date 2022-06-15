import Joi from "joi";

const getHashtagPostsParamsSchema = Joi.object({
    hashtag: Joi.string().required(),
});

export default getHashtagPostsParamsSchema;
