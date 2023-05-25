import express from 'express';
import * as pharmService from '../../service/admin/medicine.js';

const router = express.Router();

router.get('/', pharmService.showAll);
router.post('/', pharmService.insertpharm);
router.post('/update', pharmService.updatepharm);
router.get('/remove/:id', pharmService.deletepharm);

export default router;