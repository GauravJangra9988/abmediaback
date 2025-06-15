import express from 'express';
import { getTopsellingPackages } from '../controllers/packagesController.js';

const router = express.Router();

router.get('/top-selling', getTopsellingPackages);

export default router;