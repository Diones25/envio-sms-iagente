import { Router } from 'express';
import smsController from '../controllers/smsController.js';

const router = Router();

router.get('/', smsController.renderSMS);
router.post('/add', smsController.createSMS);

export default router;