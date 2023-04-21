import IRegisterBrandsUseCaseDTO from './IRegisterBrandsUseCaseDTO';
import IRegisterBrandsUseCaseResponseDTO from './IRegisterBrandsUseCaseResponseDTO';

export default interface IRegisterBrandsUseCase {
  run(data: IRegisterBrandsUseCaseDTO): Promise<IRegisterBrandsUseCaseResponseDTO>;
}
