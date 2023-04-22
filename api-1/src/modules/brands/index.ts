import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/brands', Routes);

export { router as BrandsRoutes };
