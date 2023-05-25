import express from 'express';
import * as adminAnnouncement from '../../service/admin/announcement.js';
import fs from 'fs'

const router = express.Router();

router.get('/',adminAnnouncement.showAll);
router.get('/:id',adminAnnouncement.showOne);

router.get('/write',adminAnnouncement.showWrite)

router.post('/');

router.put('/');


router.delete('/');


export default router;