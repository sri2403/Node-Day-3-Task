// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
// const mongoDB_URL=process.env.MONGODB_URL;
// const connectDB=async(req,res)=>{
//     try {
//         const connection=await mongoose.connect(mongoDB_URL);
//         console.log("MongoDB connected successfully");
//         return connection;
//     } catch (error) {
//         // console.log(error);
//         // res.status(500).json({message:"Connection error"})
//         console.error("MongoDB connection error:", error);
//         throw error; 
//     }
// }
// export default connectDB;


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoDB_URL = process.env.MONGODB_URL;

// Log the MongoDB URL to ensure it's loaded correctly
console.log("MongoDB URL:", mongoDB_URL);

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(mongoDB_URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("MongoDB connected successfully");
        return connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}

export default connectDB;
