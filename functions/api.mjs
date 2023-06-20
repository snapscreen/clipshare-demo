import express from 'express';
import { Router } from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const api = express();
const router = Router();

router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

// Enable CORS
api.use(cors());

export const handler = serverless(api);
