'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    callee: NodeSchema, // Expression
    arguments: Joi.array().items(NodeSchema.optional()) // [ Expression ]
});
