import { Router } from 'express';
import { search } from './search.controller.js';
const router = Router();

router.post('/', search);

export default router;
