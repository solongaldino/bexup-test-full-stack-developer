import { Prisma, Model } from '@prisma/client';
import { prisma } from '..';
import ModelRepositoryInterface from '../interfaces/ModelRepositoryInterface';
import MainReporitory from './MainRepository';
class ModelRepository
  extends MainReporitory<
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
  >
  implements ModelRepositoryInterface
{
  constructor(conn = prisma) {
    super('model', conn);
  }

  findById(param: Model['id'], conn = this.conn) {
    return conn.model.findUnique({
      where: {
        id: param,
      },
    });
  }

  findByName(param: Model['name'], conn = this.conn) {
    return conn.model.findFirst({
      where: {
        name: param,
      },
    });
  }

  findByCode(param: Model['code'], conn = this.conn) {
    return conn.model.findFirst({
      where: {
        code: param,
      },
    });
  }
}

export default ModelRepository;
