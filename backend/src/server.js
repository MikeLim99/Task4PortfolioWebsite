import express from 'express';
import env from 'dotenv';
import router from '../routes/routes.js'
import { connectDB } from '../config/db.js';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
// Load environment variables from .env file
env.config();

const FrontEndURL = process.env.FRONTEND_URL;

const Server = express();

connectDB();


//middleware
Server.use(cors({
    origin: function (origin, callback) {
        if(!origin || FrontEndURL.includes(origin)) {
            callback(null, true);
        }else {
            callback(new Error("Not Allowed by CORS"));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Server.use("/uploads", express.static(path.join(__dirname, "uploads")));


Server.use('/api', router)

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    Server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Export for Vercel
export default Server;