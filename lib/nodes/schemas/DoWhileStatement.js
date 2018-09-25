'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    body: NodeSchema, // Statement
    test: NodeSchema // Expression
});
