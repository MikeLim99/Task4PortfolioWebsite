import express from 'express';
import { addProject, getAllProjects, updateProject, deleteProject, getProject } from '../controller/projectsController.js';

const router = express.Router();

router.get('/', getAllProjects)
router.get('/:id', getProject)
router.post('/createProject', addProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router;
