import ThingModel from '../models/thing.js';
import {StatusCodes} from 'http-status-codes';

const getThings = async (req, res) => {
    try {
        const things = await ThingModel.find({}).sort('createdAt');
        res.status(StatusCodes.OK).json({success : true, things, size : things.length});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

const createThing = async (req, res) => {
    try {
        const thing = await ThingModel.create({...req.body})
        res.status(StatusCodes.CREATED).json({success : true, thing, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

export {createThing, getThings}