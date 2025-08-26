import express from 'express';

import bodyParser from "body-parser";
import { clerkWebhook } from '../controllers/webhook.controller.js';

const router = express.Router();

router.post(
    '/clerk', bodyParser.raw({
    type:"application/json"}), 
    clerkWebhook
)

export default router;