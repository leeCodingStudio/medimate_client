import express from 'express';
import * as medicine from '../../service/main/medicine.js';

const router = express.Router();

router.get('/', medicine.showAll);

export default router;