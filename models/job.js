import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    handle: {
        type: String,
        required: true,
        unique: true
    },
    published: { 
        type: Boolean, 
        default: false 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

let JobModel = mongoose.model('Job', JobSchema);

export default JobModel;