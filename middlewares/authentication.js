import jwt from 'jsonwebtoken';
import config from '../config/index.js';

export default (req, res, next) => {
  if(req.headers.authorization?.startsWith('Bearer')) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, config.jwtSecret);
        //attach the user to the jobs route
        req.user = {_id : decoded.id};
        next();
    } catch (error) {
        res.status(401).json({success : false, error : error.message});
        throw new Error('Not Authorized')
    }
  }
}