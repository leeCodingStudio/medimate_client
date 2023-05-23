import express from 'express';
import userRouter from './user.js';
import drugstoreRouter from './drugstore.js';
import qnaRouter from './qna.js';
import medicineRouter from './medicine.js'

const router = express.Router();

router.use('/user', userRouter);
router.use('/drugstore', drugstoreRouter);
router.use('/qna', qnaRouter);
router.use('/medicine', medicineRouter);

export default router;