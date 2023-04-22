import { BrandRepositoryInterface } from '@shared/repositories/prisma';
import { inject, injectable } from 'tsyringe';
import {
  IListAllBrandsUseCase,
  IListAllBrandsUseCaseDTO,
  IListAllBrandsUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class ListAllBrandsUseCase implements IListAllBrandsUseCase {
  constructor(
    @inject('BrandRepository')
    private brandRepository: BrandRepositoryInterface,
  ) {}

  async run({}: IListAllBrandsUseCaseDTO): Promise<IListAllBrandsUseCaseResponseDTO> {
    return await this.brandRepository.findMany({
      where: {},
    });
  }
}
