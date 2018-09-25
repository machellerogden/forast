'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    test: NodeSchema, // Expression
    consequent: NodeSchema, // Statement
    alternate: Joi.alternatives().try(NodeSchema, null).optional() // Statement | null
});
