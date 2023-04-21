import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { ExemploController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const exemploController = container.resolve(ExemploController);
router.post(
  '/send-brands-to-queue',
  joiValidateSchema(Schema.exemplo),
  exemploController.handle.bind(exemploController),
);

export { router as Routes };
