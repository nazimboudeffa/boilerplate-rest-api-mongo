import express from 'express';
import { createJob, getJobs } from '../controllers/jobs.js';

const router = express.Router();

router.route('/jobs').get(getJobs)
router.route('/create').post(createJob)

export {router as jobsRoutes}