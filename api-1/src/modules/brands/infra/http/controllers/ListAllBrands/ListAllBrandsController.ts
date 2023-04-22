import { IListAllBrandsUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class ListAllBrandsController {
  constructor(
    @inject('ListAllBrandsUseCase')
    private listallbrandsUseCase: IListAllBrandsUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listallbrandsUseCase.run({});

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
