const schemaValidateMiddleware = (schema) => {
    return (schemaValidateMiddleware[schema] = (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error)
            return res
                .status(422)
                .send(error.details.map(({ message }) => message));
        next();
    });
};

export default schemaValidateMiddleware;
