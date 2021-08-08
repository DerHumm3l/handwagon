const { Signale } = require("signale");

const options = {
  types: {
    error: {
      badge: "👎",
      color: "red",
    },
    info: {
      badge: "👌",
      color: "white",
    },
    success: {
      badge: "👍",
      color: "green",
    },
    warn: {
      badge: "👆",
      color: "yellow",
    },
  },
};

const settings = {
  displayTimestamp: true,
  displayDate: true,
};

const logger = new Signale(options);

logger.config(settings);

module.exports = logger;
