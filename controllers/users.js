import UserModel from "../models/user.js";

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).sort("createdAt");
        res.status(200).json({ success: true, users, size: users.length });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
  
export { getUsers };