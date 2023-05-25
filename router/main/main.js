import express from 'express';
import loginRouter from './login.js';
import indexRouter from './index.js';

const router = express.Router();


router.use('/index',indexRouter)
router.use('/login', loginRouter);

export default router;