import Joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import UserModel from "../models/user.js";
import config from "../config/index.js";

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, { expiresIn: "30d" });
  };

const register = asyncHandler(async (req, res) => {
    const { body } = req
    const schema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    })
    const { value, error } = schema.validate(body)
  console.log(value, error)
    if (error) {
      throw error
    }

    const { email, password } = value
  
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }
  
    // check if user exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    // create hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // create user
    const user = await UserModel.create({
      email,
      password: hashedPassword,
    });
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
  res.status(400);
  throw new Error("Please add all fields");
  }

  // Check for user email
  const user = await UserModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
  res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
  });
  } else {
  res.status(400);
  throw new Error("Invalid credentials");
  }
});

const logout = asyncHandler(async (req, res) => {
    res.send("Logout");
});

const forgotPassword = asyncHandler(async (req, res) => {
});

const resetPassword = asyncHandler(async (req, res)=> {
});

const sendVerificationEmail = asyncHandler(async (req, res) => {
});

const verifyEmail = asyncHandler(async (req, res) => {
});

export { login, register };