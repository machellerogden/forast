'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    value: Joi.alternatives().try(Joi.string(), Joi.boolean(), Joi.any().valid(null), Joi.number(), Joi.object().type(RegExp)) // string | boolean | null | number | RegExp;
});
