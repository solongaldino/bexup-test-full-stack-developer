import { Router } from 'express';
import { container } from 'tsyringe';
import { ListAllBrandsController, RegisterBrandsController } from '../controllers';

const router = Router();

const listAllBrandsController = container.resolve(ListAllBrandsController);
router.get('/list-all', listAllBrandsController.handle.bind(listAllBrandsController));

const registerBrandsController = container.resolve(RegisterBrandsController);
router.post('/register', registerBrandsController.handle.bind(registerBrandsController));

export { router as Routes };
