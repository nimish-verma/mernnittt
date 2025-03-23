import mongoose from "mongoose";


export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); 
    // process code1 means exit with failure, 0 mean exit w successs
  }
};
