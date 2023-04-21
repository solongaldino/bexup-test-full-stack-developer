export { default as BrandRepository } from './implementations/BrandRepository';
export { default as BrandRepositoryInterface } from './interfaces/BrandRepositoryInterface';

import { PrismaClient } from '@prisma/client';
import { TPrismaClientProvider } from './@types';
const prisma: TPrismaClientProvider = new PrismaClient();
export { prisma };
export * from '@prisma/client';
