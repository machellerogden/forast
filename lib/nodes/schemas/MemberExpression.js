'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    object: NodeSchema, // Expression
    property: NodeSchema, // Expression
    computed: Joi.boolean().optional() // boolean
});
