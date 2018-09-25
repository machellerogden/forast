'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    expressions: Joi.array().items(NodeSchema.required()) // [ Expression ]
});
