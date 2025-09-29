import express from 'express';

var router = express.Router();

import { router as QrCode } from './QrCode/routes.js';
import { router as Today } from './Today/routes.js';

router.use('/QrCode', QrCode);
router.use('/Today', Today);

export { router };