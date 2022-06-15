import joi from "joi";

const postSchema = joi.object({
    url: joi.string().uri().required(),
    article: joi.string(),
});

export default postSchema;
