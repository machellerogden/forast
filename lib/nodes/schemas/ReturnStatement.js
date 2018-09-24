'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    argument: NodeSchema.optional() // Expression | null
});
