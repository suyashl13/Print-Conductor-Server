import express, { Express } from 'express';
import dotenv from 'dotenv';
import baseRouter from './routers/root.router';

dotenv.config();
const app: Express = express();


// Middleware

// Router
app.use('/api/v1', baseRouter);


app.listen(process.env['PORT'] as unknown as number, function () {
    console.log("SERVER STARTED\nPORT: " + process.env['PORT']);
});