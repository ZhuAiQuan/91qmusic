import Joi from 'joi';

export const pagination = Joi.object({
  pageNo: Joi.number().integer().min(1).default(50),
  pageSize: Joi.number().integer().min(1).default(50)
});

export const idNumber = Joi.object({
  id: Joi.number().integer().required(),
});

export const id = Joi.object({
  id: Joi.string().required(),
})