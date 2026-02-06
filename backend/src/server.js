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

const Server = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

connectDB();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit per file
});

//middleware
Server.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    }
));
Server.use(express.json({ limit: '10mb' }));
Server.use(express.urlencoded({ limit: '10mb' }));

// Serve uploaded files statically
Server.use('/uploads', express.static(path.join(__dirname, '../public/images')));

// Image upload endpoint
Server.post('/api/uploadImages', upload.array('images'), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }

        const imageUrls = req.files.map(file => `http://localhost:${process.env.PORT}/uploads/${file.filename}`);
        res.status(200).json({ imageUrls });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading images', error: error.message });
    }
});

Server.use('/api', router)

Server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})