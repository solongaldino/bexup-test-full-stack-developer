import * as Joi from 'joi';

export const listModelsByBrand = Joi.object({
  params: Joi.object({
    brandName: Joi.string().required(),
  }),
}).unknown(true);

export * as Schema from '.';
