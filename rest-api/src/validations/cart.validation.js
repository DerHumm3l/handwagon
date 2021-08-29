const Joi = require("joi");

const createCart = {
  body: Joi.object().keys({
    data: Joi.object().optional(),
  }),
};

module.exports = {
  createCart,
};
