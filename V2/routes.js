import express from 'express';

const router = express.Router();

import { router as routerFromBranOrdersKKD } from "./BranOrdersKKD/routes.js";

router.use("/BranOrdersKKD", routerFromBranOrdersKKD);

export { router };