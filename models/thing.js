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
    slug: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

let ThingModel = mongoose.model('Thing', ThingSchema);

export default ThingModel;