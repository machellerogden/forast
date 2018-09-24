'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    operator: Joi.string().valid('=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=', '|=', '^=', '&='), // AssignmentOperator
    left: NodeSchema, // Pattern | Expression
    right: NodeSchema // Expression
});
