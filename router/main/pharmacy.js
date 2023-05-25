import express from 'express';
import * as pharmacy from '../../service/main/pharmacy.js';

const router = express.Router();

router.get('/', pharmacy.showAll);

export default router;