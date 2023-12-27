import ThingModel from '../models/thing.js';

const getThings = async (req, res) => {
    try {
        const things = await ThingModel.find({}).sort('createdAt');
        res.status(200).json({success : true, things, size : things.length});
    } catch (error) {
        res.status(500).json({success : false, error : error.message});
    }
}

const createThing = async (req, res) => {
    try {
        const thing = await ThingModel.create({...req.body})
        res.status(201).json({success : true, thing, msg : 'Successfully Created'});
    } catch (error) {
        res.status(500).json({success : false, error : error.message});
    }
}

export {createThing, getThings}