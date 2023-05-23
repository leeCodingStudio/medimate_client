import express from 'express';
import userRouter from './user.js';
import announcementRouter from './announcement.js';
import medicineRouter from './medicine.js'

const router = express.Router();

router.use('/user', userRouter);
router.use('/announcement', announcementRouter);
router.use('/medicine', medicineRouter);

export default router;