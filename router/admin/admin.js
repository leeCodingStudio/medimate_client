import express from 'express';
import userRouter from './user.js';
import pharmacyRouter from './pharmacy.js';
import qnaRouter from './qna.js';
import medicineRouter from './medicine.js'

const router = express.Router();

router.use('/user', userRouter);
router.use('/pharmacy', pharmacyRouter);
router.use('/qna', qnaRouter);
router.use('/medicine', medicineRouter);

export default router;