import express from 'express';
import * as announcementService from '../../service/admin/announcement.js';

const router = express.Router();

router.get('/', announcementService.showAll);

export default router;