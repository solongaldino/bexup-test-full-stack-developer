import { Prisma, Brand } from '@prisma/client';
import { prisma } from '..';
import BrandRepositoryInterface from '../interfaces/BrandRepositoryInterface';
import MainReporitory from './MainRepository';
class BrandRepository
  extends MainReporitory<
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
  >
  implements BrandRepositoryInterface
{
  constructor(conn = prisma) {
    super('brand', conn);
  }

  findById(param: Brand['id'], conn = this.conn) {
    return conn.brand.findUnique({
      where: {
        id: param,
      },
    });
  }

  findByName(param: Brand['name'], conn = this.conn) {
    return conn.brand.findFirst({
      where: {
        name: param,
      },
    });
  }

  findByCode(param: Brand['code'], conn = this.conn) {
    return conn.brand.findFirst({
      where: {
        code: param,
      },
    });
  }
}

export default BrandRepository;
