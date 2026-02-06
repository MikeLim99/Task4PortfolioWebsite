import express from 'express';
import { addProject, getAllProjects, updateProject, deleteProject, getProject } from '../controller/projectsController.js';
import { getAllCertificates, addCertificate } from '../controller/certificateController.js';

const router = express.Router();

// Certificate Routes (must come before /:id)
router.get('/certificates', getAllCertificates)
router.post('/certificates', addCertificate)

// Project Routes
router.get('/', getAllProjects)
router.get('/:id', getProject)
router.post('/createProject', addProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router;
