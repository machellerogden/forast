'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    init: Joi.alternatives().try(NodeSchema, null).optional(), // VariableDeclaration | Expression | null
    test: Joi.alternatives().try(NodeSchema, null).optional(), // Expression | null
    update: Joi.alternatives().try(NodeSchema, null).optional(), // Expression | null
    body: NodeSchema // Statement
});
