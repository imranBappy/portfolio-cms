import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
