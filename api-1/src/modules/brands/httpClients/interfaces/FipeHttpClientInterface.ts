import { Brand } from '@shared/repositories/prisma';

export default interface FipeHttpClientInterface {
  getList(): Promise<Brand[]>;
}
