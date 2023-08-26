import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(
      colors.underline.cyan(`MongoDB connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(colors.red(`${error}`));
    process.exit(1);
  }
};
export default connectDB;
