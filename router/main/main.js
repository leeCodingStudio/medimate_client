import express from 'express';
import loginRouter from './login.js';
import indexRouter from './index.js';
import calendarRouter from './calendar.js';

const router = express.Router();


router.use('/index',indexRouter)
router.use('/login', loginRouter);

router.use('/calendar', calendarRouter);

export default router;