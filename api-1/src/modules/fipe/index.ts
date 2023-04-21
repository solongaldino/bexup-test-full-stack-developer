import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/fipe', Routes);

export { router as FipeRoutes };
