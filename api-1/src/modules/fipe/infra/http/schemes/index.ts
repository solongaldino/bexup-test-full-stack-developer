import * as Joi from 'joi';

export const exemplo = Joi.object({
  body: Joi.object({
    userId: Joi.string().required(),
  }),
}).unknown(true);

export * as Schema from '.';
