'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    pattern: Joi.string(), // string
    flags: Joi.string() // string
});
