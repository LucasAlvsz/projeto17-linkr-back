import existingUserPageValidate from "../services/existingUserPageValidate.js";

const getUserPageMiddleware = async (req, res, next) => {
    const { id } = req.params;
    const isExisting = await existingUserPageValidate(id);
    if (!isExisting) return res.status(404).send("User does not exist");
    if (isExisting === -1) return res.sendStatus(500);
    next();
};

export default getUserPageMiddleware;
