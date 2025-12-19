import express from 'express';
import cors from 'cors';

import 'dotenv/config';

import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';

const app = express()
// middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

// routes
app.get('/', (req,res)=>res.send('server is live!'))

app.use(requireAuth())
app.use('/api/ai', aiRouter)

const PORT= process.env.PORT || 3000;
// START
app.listen(PORT, ()=>console.log("server is runnin on port", PORT))