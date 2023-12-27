import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: "",
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

let UserModel = mongoose.model('User', UserSchema);

export default UserModel;