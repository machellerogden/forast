'use strict';

const NodeSchema = require('./Node');

const Joi = require('joi');

module.exports = NodeSchema.keys({
    name: Joi.string(), // string
    computed: Joi.boolean().optional() // boolean
});
