import express from 'express';
import { addProject, getAllProjects, updateProject, deleteProject, getProject } from '../controller/projectsController.js';
import { getAllCertificates, addCertificate } from '../controller/certificateController.js';
import { uploadImage } from '../middleware/uploadImage.js';

const router = express.Router();

// Certificate Routes (must come before /:id)
router.get('/certificates', getAllCertificates)
router.post('/certificates', addCertificate)

// Project Routes
router.get('/', getAllProjects)
router.get('/:id', getProject)
router.post('/createProject', uploadImage.array('image', 10), addProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router;
