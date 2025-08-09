const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
    createJob,
    getJobs,
    updatedJob,
    deleteJob
} = require('../controllers/jobController');

router.post('/',upload.single('image'),createJob);
router.get('/',getJobs);
router.put('/:id',upload.single('image'),updatedJob);
router.delete('/:id',deleteJob);

module.exports = router;