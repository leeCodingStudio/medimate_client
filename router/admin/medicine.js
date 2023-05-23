import express from 'express';
import * as drugService from '../../service/admin/medicine.js';

const router = express.Router();

router.get('/', drugService.showAll);
router.post('/', drugService.insertDrug);
router.post('/update', drugService.updateDrug);
router.get('/remove/:id', drugService.deleteDrug);

export default router;