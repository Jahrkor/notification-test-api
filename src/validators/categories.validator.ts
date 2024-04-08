import Joi from "joi";

export const categoryValidator: Joi.ObjectSchema<{ name: string }> = Joi.object(
  {
    name: Joi.string().required(),
  },
);
