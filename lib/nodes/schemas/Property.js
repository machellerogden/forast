'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const LiteralSchema = require('./Literal');
const IdentifierSchema = require('./Identifier');

module.exports = NodeSchema.keys({
    method: Joi.boolean().optional(), // boolean
    shorthand: Joi.boolean().optional(), // boolean
    computed: Joi.boolean().optional(), // boolean
    key: Joi.alternatives().try(LiteralSchema, IdentifierSchema), // Literal | Identifier
    value: NodeSchema, // Expression
    kind: Joi.string().valid('init', 'get', 'set').optional() // 'init', 'get', 'set'
});
