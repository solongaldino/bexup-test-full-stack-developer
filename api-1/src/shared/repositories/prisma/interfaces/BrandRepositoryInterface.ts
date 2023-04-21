import { Brand, Prisma } from '@prisma/client';
import { Connection } from '@shared/repositories/prisma/@types';
import IMainRepository from './IMainRepository';

interface BrandRepositoryInterface
  extends IMainRepository<
    Brand,
    Prisma.BrandAggregateArgs,
    Prisma.BrandCountArgs,
    Prisma.BrandCreateArgs,
    Prisma.BrandCreateManyArgs,
    Prisma.BrandDeleteArgs,
    Prisma.BrandDeleteManyArgs,
    Prisma.BrandFindFirstArgs,
    Prisma.BrandFindManyArgs,
    Prisma.BrandFindUniqueArgs,
    Prisma.BrandGroupByArgs,
    Prisma.BrandUpdateArgs,
    Prisma.BrandUpdateManyArgs,
    Prisma.BrandUpsertArgs
  > {
  findById(param: Brand['id'], conn?: Connection): Promise<Brand | null>;
  findByName(param: Brand['name'], conn?: Connection): Promise<Brand | null>;
  findByCode(param: Brand['code'], conn?: Connection): Promise<Brand | null>;
}

export default BrandRepositoryInterface;
