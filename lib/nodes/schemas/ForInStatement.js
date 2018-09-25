'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    left: NodeSchema, // VariableDeclaration | Pattern
    right: NodeSchema, // Expression
    body: NodeSchema // Statement
});
