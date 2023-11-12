import 'dotenv/config'
import express from 'express';
import { connectDB } from './db/connection.js';

const app = express();
const port = process.env.PORT || 3000;

const start = async () => {
    console.log("Starting server...");
    try {
        await connectDB(process.env.DATABASE_URL);
        console.log("Connecting to database...");
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();