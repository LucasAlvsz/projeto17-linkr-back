const verboseLog = (...args) => {
    if (process.env.VERBOSE_MODE) console.log(...args);
};

export default verboseLog;
