import Projects from "../model/projectsModel.js";

export async function getProject(req, res) {
    try {
        const project = await Projects.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
    }
}
export async function getAllProjects(req, res){
    try{
        const projects = await Projects.find().sort({createdAt: -1})
        res.json(projects);
    }catch(error) {
        console.error('Error fetching projects:', error);
    }
}

export async function addProject(req, res) {
    try{
        const { ProjectName, ProjectDescription, tags=[], assignedPosition, projectLink, images } = req.body
        
        console.log('Received project data:', req.body);
        console.log('Images received:', images);

        const newProject = new Projects({
            ProjectName,
            ProjectDescription,
            tags,
            assignedPosition,
            projectLink,
            images
        })
        const savedProject = await newProject.save()
        console.log('Saved project:', savedProject);
        res.json(savedProject);
    }catch(error){
        console.log("Error: addProject function", error)
        res.status(500).json({ message: 'Error creating project', error: error.message })
    }
}

export async function updateProject(req, res){
    try{
        const { ProjectName, ProjectDescription, tags=[], assignedPosition, projectLink, images=[] } = req.body
        const updateProject = await Projects.findByIdAndUpdate(req.params.id, { ProjectName, ProjectDescription, tags, assignedPosition, projectLink, images }, { new: true, })
        if (!updateProject) return res.json({ message: 'Project not found' });
        res.json(updateProject)
    }catch(error){
        console.log("Error: updateProject function", error)
    }
}

export async function deleteProject(req, res){
    try{
        const deleteProject = await Projects.findByIdAndDelete(req.params.id)
        if (!deleteProject) return res.json({ message: 'Project not found' });
        res.json({ message: 'Project deleted successfully' });
    }catch(error){
        console.log("Error: deleteProject function", error)
    }
}