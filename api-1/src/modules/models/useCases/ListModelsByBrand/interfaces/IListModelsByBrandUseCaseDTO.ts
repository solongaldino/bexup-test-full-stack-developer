import { Brand } from '@shared/repositories/prisma';

export default interface IListModelsByBrandUseCaseDTO {
  brandName: Brand['name'];
}
