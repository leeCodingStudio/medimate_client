import express from 'express';
import * as userService from '../../service/admin/user.js';

const router = express.Router();

router.get('/', userService.showAll);

export default router;