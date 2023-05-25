import express from 'express';
import loginRouter from './login.js';
import indexRouter from './index.js';
import mypageRouter from './mypage.js';
import medicineRouter from './medicine.js';

const router = express.Router();


router.use('/index',indexRouter)
router.use('/login', loginRouter);
router.use('/mypage',mypageRouter)
router.use('/medicine',medicineRouter)

export default router;