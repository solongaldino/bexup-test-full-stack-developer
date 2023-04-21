import { inject, injectable } from 'tsyringe';
    import { IRegisterBrandsUseCase, IRegisterBrandsUseCaseDTO, IRegisterBrandsUseCaseResponseDTO } from '../interfaces';
    
    @injectable()
    export default class RegisterBrandsUseCase implements IRegisterBrandsUseCase {
      // constructor(
      //   @inject('SomeRepository')
      //   private someRepository: ISomeRepository,
      // ) {}
    
      async run({
        data
      }: IRegisterBrandsUseCaseDTO): Promise<IRegisterBrandsUseCaseResponseDTO> {
        return {
          data
        };
      }
    }
    