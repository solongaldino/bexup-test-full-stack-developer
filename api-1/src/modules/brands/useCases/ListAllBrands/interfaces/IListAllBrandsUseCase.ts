import IListAllBrandsUseCaseDTO from './IListAllBrandsUseCaseDTO';
import IListAllBrandsUseCaseResponseDTO from './IListAllBrandsUseCaseResponseDTO';

export default interface IListAllBrandsUseCase {
  run(data: IListAllBrandsUseCaseDTO): Promise<IListAllBrandsUseCaseResponseDTO>;
}
