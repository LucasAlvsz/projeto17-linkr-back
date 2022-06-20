const formatPostHashtagQuery = (postId, hashtagIds) => {
    const buildQuery = hashtagIds.map(
        (hashtag) => `(${postId.id}, ${hashtag.id})`,
    );
    const joinAll = buildQuery.join(", ");
    return joinAll;
};

export default formatPostHashtagQuery;
