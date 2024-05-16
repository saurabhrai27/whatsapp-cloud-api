import express from 'express';
import whatsAppController from '../controllers/whatsAppController.js';

const router = express.Router();

router.get('/sendMessage', whatsAppController.sendMessage);

export default router;
