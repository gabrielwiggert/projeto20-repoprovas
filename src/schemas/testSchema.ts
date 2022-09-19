import Joi from "joi";

export const testSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  category: Joi.string().required(),
  discipline: Joi.string().required(),
  teacher: Joi.string().required()
});