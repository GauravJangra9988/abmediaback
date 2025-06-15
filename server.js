import express from 'express';
import { getDestinations } from './controllers/destinationsController.js';
import packagesRoute from './routes/packagesRoute.js';
import {connectDB} from './db.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

connectDB();

app.get('/',(req,res)=>{
    res.send("server started")
})

app.get('/api/destinations',getDestinations);
app.use('/api/packages',packagesRoute);


app.listen(PORT,()=>{
    console.log("server started");
})