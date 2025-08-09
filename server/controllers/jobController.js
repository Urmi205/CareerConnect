const Job = require('../models/Job');
const fs = require('fs');
const path = require('path');

//create job
exports.createJob = async (req, res) => {
    const { position, company } = req.body;
    const image = req.file ? req.file.filename : null;
    const job = new Job({ position, company, image });
    await job.save();
    res.json(job);
};
//view
exports.getJobs = async(req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
}
//updated
exports.updatedJob = async (req, res) => {
    const { position, company } = req.body;
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    //delete old image
    if (req.file && job.image) {
        const filepath = path.join(__dirname, '../uploads', job.image);
        if (fs.existsSync(filepath)) {fs.unlinkSync(filepath);
        }
    }
    job.position = position || job.position;
    job.company = company || job.company;
    if (req.file) {
        job.image = req.file.filename;
    }
    const updated = await job.save();
    res.json(updated);
};
//delete
exports.deleteJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    //delete old image
    if (job.image) {
        const filepath = path.join(__dirname, '../uploads', job.image);
        if (fs.existsSync(filepath)) fs.unlinkSync(filepath)
    }
    await job.remove();
    res.json({ message: 'Job deleted' });
}
 