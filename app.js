import 'dotenv/config'
import express from 'express';
import { connectDB } from './db/connection.js';
import { jobsRoutes } from './routes/jobs.js';

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

//routes
app.get('/health', (req, res)=> {
    res.send('Jobs API is healthy');
});
app.use('/', jobsRoutes);

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