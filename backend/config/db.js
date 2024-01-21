import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rishiind94:rishi123@cluster0.gvbv7jf.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection successful...");
  } catch (err) {
    console.error("Connection failed:", err);
  }
};

export default connectDB;