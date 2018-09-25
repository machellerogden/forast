'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');

module.exports = NodeSchema.keys({
    test: NodeSchema, // Expression
    alternate: NodeSchema, // Expression
    consequent: NodeSchema // Expression
});
