import express from 'express';
import userRouter from './user.js';
import announcementRouter from './announcement.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/announcement', announcementRouter);

export default router;