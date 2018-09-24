'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const PropertySchema = require('./Property');

module.exports = NodeSchema.keys({
    properties: Joi.array().items(PropertySchema.optional()) // [ Property ]
});
