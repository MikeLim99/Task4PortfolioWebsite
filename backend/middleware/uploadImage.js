import multer from 'multer';
import cloudinary from '../config/cloudinary.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPG, PNG, and WEBP images are allowed.'));
    }
    cb(null, true);
  }
});

export const uploadImage = {
  single: (fieldName) => [
    upload.single(fieldName),
    async (req, res, next) => {
      if (!req.file) {
        return next();
      }

      const cfg = cloudinary.config();
      if (!cfg.cloud_name || !cfg.api_key || !cfg.api_secret) {
        return res.status(500).json({ error: 'Cloudinary is not configured on the server.' });
      }

      try {
        const uploadResult = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: 'products',
              public_id: `product-${Date.now()}-${Math.round(Math.random() * 1e9)}`,
              resource_type: 'image'
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );

          stream.end(req.file.buffer);
        });

        req.file.path = uploadResult.secure_url;
        req.file.filename = uploadResult.public_id;
        return next();
      } catch (error) {
        console.error('Cloudinary upload error:', error);
        return res.status(500).json({ error: 'Cloudinary upload failed', details: error.message });
      }
    }
  ]
};
