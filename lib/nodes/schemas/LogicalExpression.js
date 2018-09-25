'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    operator: Joi.string().valid('||', '&&'), // LogicalOperator
    left: NodeSchema, // Expression
    right: NodeSchema // Expression
});
