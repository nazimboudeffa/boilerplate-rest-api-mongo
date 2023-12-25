import express from 'express';
import { createThing, getThings } from '../controllers/things.js';

const router = express.Router();

router.route('/things').get(getThings)
router.route('/create').post(createThing)

export {router as thingsRoutes}