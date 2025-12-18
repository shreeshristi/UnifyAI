import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express()
// middlewares
app.use(cors())
app.use(express.json())

// routes
app.get('/', (req,res)=>res.send('server is live!'))

const PORT= process.env.PORT || 3000;
// START
app.listen(PORT, ()=>console.log("server is runnin on port", PORT))