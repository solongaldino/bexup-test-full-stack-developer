import { Router } from 'express';
  import { Routes } from './infra/http/routes';
  
  const router = Router();
  
  router.use('/models', Routes);
  
  export { router as ModelsRoutes };
  