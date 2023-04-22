export { default as BrandRepository } from './implementations/BrandRepository';
export { default as BrandRepositoryInterface } from './interfaces/BrandRepositoryInterface';
export { default as ModelRepository } from './implementations/ModelRepository';
export { default as ModelRepositoryInterface } from './interfaces/ModelRepositoryInterface';

import { PrismaClient } from '@prisma/client';
import { TPrismaClientProvider } from './@types';
const prisma: TPrismaClientProvider = new PrismaClient();
export { prisma };
export * from '@prisma/client';
