import { Router } from 'express';
import { getHistory } from './history.controller.js';
const router = Router();

router.get('/', getHistory);

export default router;
