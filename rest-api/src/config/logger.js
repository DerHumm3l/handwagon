const { createLogger, format, transports } = require("winston");
const { colorize, combine, printf, splat } = format;

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = createLogger({
  level: "debug",
  format: combine(
    enumerateErrorFormat(),
    colorize(),
    splat(),
    printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

module.exports = logger;
