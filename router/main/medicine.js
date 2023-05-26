import express from 'express';
import * as medicineService from '../../service/main/medicine.js';

const router = express.Router();

router.get('/', medicineService.showAll);

router.post('/')

export default router;