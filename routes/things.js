import express from 'express';
import middlewares from '../middlewares/index.js';
import { createThing, getThings } from '../controllers/things.js';

const router = express.Router();

router.route('/things').get(getThings)
router.post("/create-thing", middlewares.authenticate, createThing)

export {router as thingsRoutes}