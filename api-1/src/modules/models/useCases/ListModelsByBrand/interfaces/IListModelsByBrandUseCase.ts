import IListModelsByBrandUseCaseDTO from './IListModelsByBrandUseCaseDTO';
import IListModelsByBrandUseCaseResponseDTO from './IListModelsByBrandUseCaseResponseDTO';

export default interface IListModelsByBrandUseCase {
  run(data: IListModelsByBrandUseCaseDTO): Promise<IListModelsByBrandUseCaseResponseDTO>;
}
