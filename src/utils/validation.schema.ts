import * as Joi from 'joi';

export const validationSchema = Joi.object({
  CHAPAR_ACTIVE: Joi.boolean(),
});
