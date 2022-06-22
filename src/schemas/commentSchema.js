import joi from "joi";

const commentSchema = joi.object({
    comment: joi.string().required(),
    postId: joi.number().integer().required(),
    userId: joi.number().integer().required(),
});

export default commentSchema;
