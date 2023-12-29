import pino from "pino";

const transport = pino.transport({
  targets: [
    {
      level: "info",
      target: "pino-pretty",
    },
  ],
});

const logger = pino({
  level: "debug",
  base: {
    env: process.env.NODE_ENV,
    revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
  transport,
});

export default logger;
