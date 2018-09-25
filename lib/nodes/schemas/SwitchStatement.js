'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const SwitchCaseSchema = require('./SwitchCase');

module.exports = NodeSchema.keys({
    discriminant: NodeSchema,
    cases: Joi.array().items(SwitchCaseSchema)
});
