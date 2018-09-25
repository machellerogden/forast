'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    id: NodeSchema, // Pattern
    init: Joi.alternatives().try(NodeSchema, null).optional() // Expression | null
});
