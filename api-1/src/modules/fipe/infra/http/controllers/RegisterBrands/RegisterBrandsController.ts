import { IRegisterBrandsUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class RegisterBrandsController {
  constructor(
    @inject('RegisterBrandsUseCase')
    private registerbrandsUseCase: IRegisterBrandsUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      await this.registerbrandsUseCase.run({});

      return res.status(201).send();
    } catch (error) {
      return next(error);
    }
  }
}
