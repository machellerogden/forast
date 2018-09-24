'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    operator: Joi.string().valid( "-", "+", "!", "~", "typeof", "void", "delete"), // UnaryOperator
    argument: NodeSchema, // Expression
    prefix: Joi.boolean() // boolean
});
