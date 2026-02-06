import mongoose from 'mongoose'

//project schema

const projectSchema = new mongoose.Schema({
    ProjectName:
    {
        type: String,
        required: true
    },
    ProjectDescription:
    {
        type: String,
        required: true
    },
    tags:
    {
        type: [String],
        required: true
    },
    assignedPosition:
    {
        type: String,
        required: true
    },
    projectLink:
    {
        type: String,
    },
    images:
    {
        type: [String],
        required: true
    },
    projectFilter:
    {
        type: String,
    }
}, {timestamps:true})

const Projects = mongoose.model('Projects', projectSchema)

export default Projects;