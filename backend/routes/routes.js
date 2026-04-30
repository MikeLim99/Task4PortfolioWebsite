import express from 'express';
import { addProject, getAllProjects, updateProject, deleteProject, getProject } from '../controller/projectsController.js';
import { getAllCertificates, addCertificate } from '../controller/certificateController.js';
import { uploadImage } from '../middleware/uploadImage.js';

const router = express.Router();

// Certificate Routes
router.get('/certificates', getAllCertificates)
router.post('/certificates',uploadImage.single('CertImage') ,addCertificate)

// Project Routes
router.get('/', getAllProjects)
router.get('/:id', getProject)
router.post('/createProject', uploadImage.array('image'), addProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router;
