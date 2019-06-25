import { uploader as upload, config } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

export const uploader = upload;
export const cloudinaryConfig = (req, res, next) => {
config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

next();

}
