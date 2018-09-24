'use strict';

const Joi = require('joi');

module.exports = Joi.object({
    type: Joi.string().required()
}).unknown();
