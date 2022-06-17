import urlMetadata from "url-metadata";

import verboseLog from "../utils/verboseLog.js";

const getMetadataUrl = async (link) => {
    try {
        const { title, description, image } = await urlMetadata(link);
        const urlMetadataResult = {
            title,
            description,
            image,
        };
        return urlMetadataResult;
    } catch (err) {
        verboseLog(err);
        return -1;
    }
};

export default getMetadataUrl;
