import mongoose from 'mongoose';

const ThingSchema = new mongoose.Schema({
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

let ThingModel = mongoose.model('Thing', ThingSchema);

export default ThingModel;