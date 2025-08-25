import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js"


const app =express();
const PORT=process.env.PORT || 8080;

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",          // local frontend (for dev)
  "https://aisle-chi.vercel.app/" // your deployed frontend (replace with your actual Vercel URL)
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api",chatRoutes);

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
connectDB();
});

const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  }catch(error){
    console.log("failed to connect to database",error);
  }
}


