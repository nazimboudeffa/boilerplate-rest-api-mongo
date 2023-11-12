import JobModel from '../models/job.js';
import {StatusCodes} from 'http-status-codes';

const getJobs = async (req, res) => {
    try {
        const jobs = await JobModel.find({}).sort('createdAt');
        res.status(StatusCodes.OK).json({success : true, jobs, size : jobs.length});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

const createJob = async (req, res) => {
    try {
        const job = await JobModel.create({...req.body})
        res.status(StatusCodes.CREATED).json({success : true, job, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

export {createJob, getJobs}