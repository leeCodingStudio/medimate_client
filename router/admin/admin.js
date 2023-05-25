import express from 'express';
import userRouter from './user.js';
import pharmacyRouter from './pharmacy.js';
import qnaRouter from './qna.js';
import medicineRouter from './medicine.js'
import announcementRouter from './announcement.js'

const router = express.Router();

router.use('/user', userRouter);
<<<<<<< HEAD
router.use('/pharmacy', pharmacyRouter);
=======

router.use('/drugstore', drugstoreRouter);

>>>>>>> 6b97ccc17227e71b163070effe7d04fdc55e9311
router.use('/qna', qnaRouter);

router.use('/medicine', medicineRouter);

router.use('/announcement', announcementRouter);

export default router;