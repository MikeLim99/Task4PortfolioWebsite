import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Issuer: {
        type: String,
        required: true
    },
    IssueDate: {
        type: Date,
        required: false
    },
    Description: {
        type: String,
    },
    CertImage: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Certificates = mongoose.model('Certificates', certificateSchema);

export default Certificates;