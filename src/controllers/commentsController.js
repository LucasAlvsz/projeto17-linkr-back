import commentsRepository from "../repositories/commentsRepository.js";

export const insertComment = async (req, res) => {
    const { comment, postId, userId } = req.body;
    const userTokenId = res.locals.userData;
    if (userTokenId != userId) return res.sendStatus(401);
    const { rows } = await commentsRepository.insertComment(
        comment,
        postId,
        userId,
    );
    if (!rows.length)
        return res.status(404).send({
            message: `Comment not inserted, cannot found post ${postId} of user ${userId}`,
        });
    return res.status(201).send(rows[0]);
};
