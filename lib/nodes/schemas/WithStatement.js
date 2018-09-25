'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    object: NodeSchema, // Expression
    body: NodeSchema // Statement
});
