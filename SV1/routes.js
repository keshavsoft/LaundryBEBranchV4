import express from 'express';

const router = express.Router();

import { router as routerFromMastersItemCategory } from "./MastersItemCategory/routes.js";
import { router as routerFromMastersAddOns } from "./MastersAddOns/routes.js";

router.use("/MastersItemCategory", routerFromMastersItemCategory);
router.use("/MastersAddOns", routerFromMastersAddOns);

export { router };