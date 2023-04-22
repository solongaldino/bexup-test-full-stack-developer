import { IListModelsByBrandUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class ListModelsByBrandController {
  constructor(
    @inject('ListModelsByBrandUseCase')
    private listmodelsbybrandUseCase: IListModelsByBrandUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { brandName } = req.params;

      const response = await this.listmodelsbybrandUseCase.run({
        brandName,
      });

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
