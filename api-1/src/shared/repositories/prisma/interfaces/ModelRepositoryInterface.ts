import { Model, Prisma } from '@prisma/client';
import { Connection } from '@shared/repositories/prisma/@types';
import IMainRepository from './IMainRepository';

interface ModelRepositoryInterface
  extends IMainRepository<
    Model,
    Prisma.ModelAggregateArgs,
    Prisma.ModelCountArgs,
    Prisma.ModelCreateArgs,
    Prisma.ModelCreateManyArgs,
    Prisma.ModelDeleteArgs,
    Prisma.ModelDeleteManyArgs,
    Prisma.ModelFindFirstArgs,
    Prisma.ModelFindManyArgs,
    Prisma.ModelFindUniqueArgs,
    Prisma.ModelGroupByArgs,
    Prisma.ModelUpdateArgs,
    Prisma.ModelUpdateManyArgs,
    Prisma.ModelUpsertArgs
  > {
  findById(param: Model['id'], conn?: Connection): Promise<Model | null>;
  findByName(param: Model['name'], conn?: Connection): Promise<Model | null>;
  findByCode(param: Model['code'], conn?: Connection): Promise<Model | null>;
}

export default ModelRepositoryInterface;
