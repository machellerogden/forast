'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const IdentifierSchema = require('./Identifier');

module.exports = NodeSchema.keys({
    label: Joi.alternatives().try(IdentifierSchema, null).optional() // Identifier | null
});
