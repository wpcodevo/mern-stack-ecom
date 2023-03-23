import { createClient } from "redis";
import config from "config";
import log from "./logger";

const redisUrl = config.get<string>("redisUrl");

const redisClient = createClient({ url: redisUrl });

(async function connectRedis() {
  try {
    await redisClient.connect();
  } catch (err: any) {
    setTimeout(connectRedis, 5000);
    log.error(err);
  }
})();

redisClient.on("connect", () => log.info("Redis connected successfully..."));
redisClient.set("key", "Redis client ready for requests");

export default redisClient;
