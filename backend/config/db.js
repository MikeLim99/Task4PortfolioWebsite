import mongoose from 'mongoose';
import env from 'dotenv';
import dns from 'dns';

env.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);

const URI = process.env.MONGO_URI;

export const connectDB = async () => {
    try{
        await mongoose.connect(URI)
        console.log('MongoDB connected successfully')
    }catch(error){
        console.error('MongoDB connection error:', error);
    }
}