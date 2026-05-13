import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      tls: true,
      dbName: process.env.MONGODB_DB_NAME || "kel6-database",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export default connectMongoDB;
