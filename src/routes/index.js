import express from 'express';
import whatsAppController from '../controllers/whatsAppController.js';

const router = express.Router();

router.get('/webhook', whatsAppController.verifyWebhook); 
router.post('/webhook', whatsAppController.receiveMessage);
router.get('/sendMessage', whatsAppController.sendMessage);

export default router;
