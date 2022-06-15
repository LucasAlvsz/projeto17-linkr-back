/* eslint-disable no-console */
/* eslint-disable no-undef */
const verboseLog = (...args) => {
    if (process.env.VERBOSE_MODE) console.log(...args);
};

export default verboseLog;
