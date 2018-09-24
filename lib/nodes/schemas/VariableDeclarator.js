'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    id: NodeSchema, // Pattern
    init: NodeSchema.optional() // Expression | null
});
