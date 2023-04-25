import { ModelRepositoryInterface, BrandRepositoryInterface } from '@shared/repositories/prisma';
import { ApiError } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  IListModelsByBrandUseCase,
  IListModelsByBrandUseCaseDTO,
  IListModelsByBrandUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class ListModelsByBrandUseCase implements IListModelsByBrandUseCase {
  constructor(
    @inject('ModelRepository')
    private modelRepository: ModelRepositoryInterface,
    @inject('BrandRepository')
    private brandRepository: BrandRepositoryInterface,
  ) {}

  async run({
    brandName,
  }: IListModelsByBrandUseCaseDTO): Promise<IListModelsByBrandUseCaseResponseDTO> {
    const foundBrand = await this.brandRepository.findFirst({
      where: {
        name: {
          contains: brandName,
          mode: 'insensitive',
        },
      },
    });

    if (!foundBrand) throw new ApiError(404, 'Brand not found');

    return await this.modelRepository.findMany({
      where: {
        brand_id: foundBrand.id,
      },
    });
  }
}
