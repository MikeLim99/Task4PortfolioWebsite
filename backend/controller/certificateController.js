import Certificates from "../model/certificalModel.js";

export async function getAllCertificates(req, res){
    try {
        const certificates = await Certificates.find().sort({createdAt: -1});
        res.json(certificates);
    } catch (error) {
        console.error('Error fetching certificates:', error);
    }
}

export async function addCertificate(req, res) {
    try {
        console.log('Received certificate data:', req.body);

        const { Title, Issuer, IssueDate, Description } = req.body;
        const CertImage = req.file?.path || req.body.CertImage || '';

        const newCertificate = new Certificates({
            Title,
            Issuer,
            IssueDate,
            Description,
            CertImage
        });

        const savedCertificate = await newCertificate.save();
        res.status(201).json(savedCertificate);
    } catch (error) {
        console.error('Error adding certificate:', error);
        res.status(500).json({ message: 'Failed to add certificate', error: error.message });
    }
}