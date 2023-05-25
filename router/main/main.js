import express from 'express';
import loginRouter from './login.js';
import indexRouter from './index.js';
import pharmRouter from './pharmacy.js';
import medicineRouter from './medicine.js';

const router = express.Router();

router.use('/index',indexRouter);
router.use('/login', loginRouter);
router.use('/pharmacy', pharmRouter);
router.use('/medicine', medicineRouter);

export default router;