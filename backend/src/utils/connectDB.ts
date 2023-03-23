import config from "config";
import mongoose from "mongoose";
import log from "./logger";

const ATLAS_URI = config.get<string>("dbAtlasUri");
const LOCAL_DB_URI = config.get<string>("dbLocalUri");

const connectDB = async () => {
  try {
    await mongoose.connect(LOCAL_DB_URI);
    log.info("Database connected successfully...");
  } catch (err: any) {
    setTimeout(connectDB, 5000);
    log.error(err);
  }
};

export default connectDB;
