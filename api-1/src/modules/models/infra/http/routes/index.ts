import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { ListModelsByBrandController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const listModelsByBrandController = container.resolve(ListModelsByBrandController);
router.get(
  '/list/:brandName',
  joiValidateSchema(Schema.listModelsByBrand),
  listModelsByBrandController.handle.bind(listModelsByBrandController),
);

export { router as Routes };
