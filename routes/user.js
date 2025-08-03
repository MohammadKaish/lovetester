import express from 'express';
const router = express.Router();
import multer from "multer";
const upload = multer();

import { home,getlove, } from '../controller/homepage.js';
import { historyPage } from '../controller/history.js';

router
.route('/')
.get(home)
.post( upload.fields([
  { name: 'boyimage', maxCount: 1 },
  { name: 'girlimage', maxCount: 1 }
]),getlove);

router
.route('/history')
.get(historyPage)


export default router;