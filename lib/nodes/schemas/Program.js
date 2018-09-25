'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    body: Joi.array().items(NodeSchema.required()), // [ Directive | Statement ]
    sourceType: Joi.string().valid('script', 'module').optional()
});
