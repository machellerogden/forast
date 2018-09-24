'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    elements: Joi.array().items(NodeSchema.optional()) // [ Expression | null ]
});
