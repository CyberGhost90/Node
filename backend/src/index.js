import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
}); // Load environment variables from.env file

const startServer = async () => {
  try {
    await connectDB(); // Connect to the database

    app.on("error", (error) => {
      console.log(`Server error: ${error.message}`);
    });

    app.Listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
  }
};

startServer();
