'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const IdentifierSchema = require('./Identifier');

module.exports = NodeSchema.keys({
    params: Joi.array().items(IdentifierSchema.optional()), // [ Pattern ] - TODO: add item schemas for ObjectPattern, ArrayPattern, RestElement, AssignmentPattern
    body: NodeSchema, // FunctionBody | Expression
    expression: Joi.boolean().optional(), // boolean
    generator: Joi.boolean().optional() // boolean
});
