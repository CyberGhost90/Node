import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.mongodb_uri}`,
    );
    console.log(`\nMongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
