import getHashtagPostsParamsSchema from "../schemas/getHashtagPostsParamsSchema.js";
import existingHashtagValidate from "../services/existingHashtagValidate.js";

const getHashtagPostsMiddleware = async (req, res, next) => {
    const { error } = getHashtagPostsParamsSchema.validate(req.params, {
        abortEarly: false,
    });
    if (error)
        return res
            .status(422)
            .send(error.details.map(({ message }) => message));

    const { hashtag } = req.params;
    const isExisting = await existingHashtagValidate(hashtag);
    if (!isExisting)
        return res.status(404).send(`Hashtag "${hashtag}" does not exist`);
    if (isExisting === -1) return res.sendStatus(500);
    next();
};

export default getHashtagPostsMiddleware;
