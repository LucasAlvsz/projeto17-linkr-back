import verboseLog from "../utils/verboseLog.js";
import userPageRepository from "../repositories/userPageRepository.js";
import joinUrlMetadataWithPostData from "../services/joinUrlMetadataWithPostData.js";

export const getUserPageData = async (req, res) => {
    const { id } = req.params;
    try {
        const user = res.locals.user;
        const result = await userPageRepository.getUserPostsById(id);
        const formattedPosts = await joinUrlMetadataWithPostData(result.rows);

        res.send({
            username: user.username,
            userpic: user.userpic,
            posts: formattedPosts,
        });
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};

export const getUsersSearchBar = async (req, res) => {
    const { search } = req.query;
    if (!search) {
        return res.send([]);
    }
    try {
        const users = await userPageRepository.getListOfUsersSearchBar(search);
        res.send(users);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};
