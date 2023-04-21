import { Router } from 'express';
import { container } from 'tsyringe';
import { RegisterBrandsController } from '../controllers';

const router = Router();

const registerBrandsController = container.resolve(RegisterBrandsController);
router.post('/register-brands', registerBrandsController.handle.bind(registerBrandsController));

export { router as Routes };
