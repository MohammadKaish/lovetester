import express from 'express';
const router = express.Router();
import { historyPage } from '../controller/history.js';

router
.route('/')
.get(historyPage)

export default router;