import express from 'express';
import userRouter from './user.js';
import drugstoreRouter from './drugstore.js';
import qnaRouter from './qna.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/drugstore', drugstoreRouter);
router.use('/qna', qnaRouter);

export default router;