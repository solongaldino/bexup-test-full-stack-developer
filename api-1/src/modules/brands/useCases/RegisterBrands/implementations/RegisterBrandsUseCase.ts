import { FipeHttpClientInterface } from '@modules/brands/httpClients/interfaces';
import { ApiError } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  IRegisterBrandsUseCase,
  IRegisterBrandsUseCaseDTO,
  IRegisterBrandsUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class RegisterBrandsUseCase implements IRegisterBrandsUseCase {
  constructor(
    @inject('FipeHttpClient')
    private fipeHttpClient: FipeHttpClientInterface,
  ) {}

  async run({}: IRegisterBrandsUseCaseDTO): Promise<IRegisterBrandsUseCaseResponseDTO> {
    const lista = await this.fipeHttpClient.getList();

    if (!lista) throw new ApiError(404, 'List not found');

    for (const item of lista) {
      console.log(item);
    }
  }
}
