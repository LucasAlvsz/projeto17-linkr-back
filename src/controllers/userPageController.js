import verboseLog from "../utils/verboseLog.js";
import userPageRepository from "../repositories/userPageRepository.js";
import followersRepository from "../repositories/followersRepository.js";
import joinUrlMetadataAndCommentsWithPostData from "../services/joinUrlMetadataAndCommentsWithPostData.js";

export const getUserPageData = async (req, res) => {
    const { id } = req.params;
    try {
        const user = res.locals.user;
        const result = await userPageRepository.getUserPostsById(id);
        const formattedPosts = await joinUrlMetadataAndCommentsWithPostData(
            result.rows,
        );

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
    const userId = parseInt(res.locals.userData);
    if (!search) {
        return res.send([]);
    }
    try {
        const users = await userPageRepository.getListOfUsersSearchBar(search);
        const followers = await followersRepository.getListOfFollowersSearchBar(
            search,
            userId,
        );
        followers.map((follower) => {
            follower.isFollower = true;
        });

        const usersWithoutFollowers = users.filter((user) => {
            return !followers.some((follower) => follower.id === user.id);
        });

        usersWithoutFollowers.map((user) => {
            user.isFollower = false;
        });

        const formattedUsers = followers.concat(usersWithoutFollowers);

        res.send(formattedUsers);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};

export const getButtonFollowOrUnfollow = async (req, res) => {
    const { id: userIdPage } = req.params;
    const userIdStorage = res.locals.userData;
    try {
        const usersFollowing =
            await followersRepository.getListOfUsersFollowing(
                userIdStorage,
                userIdPage,
            );
        res.status(200).send(usersFollowing[0] ? true : false);
    } catch (err) {
        verboseLog(err);
        res.sendStatus(500);
    }
};

export const postFollowOrUnfollow = async (req, res) => {
    const { id: userIdPage } = req.params;
    const userIdStorage = res.locals.userData;
    const { Following } = req.body;

    if (Following) {
        await followersRepository.deleteFollow(userIdStorage, userIdPage);
        res.status(200).send(false);
    } else {
        await followersRepository.insertFollow(userIdStorage, userIdPage);
        res.status(200).send(true);
    }
};
