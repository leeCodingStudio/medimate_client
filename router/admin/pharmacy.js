import express from 'express';
import * as adminpharmacy from '../../service/admin/pharmacy.js';

const router = express.Router();

router.get('/', adminpharmacy.showAll);
router.post('/', adminpharmacy.create);
router.post('/update', adminpharmacy.modify);
router.get('/remove/:id', adminpharmacy.drop);


export default router;