import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    const conn = await mongoose.connect(dbUrl);
    console.log(`Mongodb connected..`.bgGreen.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
  }
};
