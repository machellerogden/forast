'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    test: Joi.alternatives().try(NodeSchema, null).optional(), // Expression | null
    consequent: Joi.array().items(NodeSchema) // [ Statement ]
});
