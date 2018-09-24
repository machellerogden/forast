'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    operator: Joi.string().valid("==", "!=", "===", "!==", "<", "<=", ">", ">=", "<<", ">>", ">>>", "+", "-", "*", "/", "%", "|", "^", "&", "in", "instanceof"), // BinaryOperator
    left: NodeSchema, // Expression
    right: NodeSchema // Expression
});
