'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const BlockStatementSchema = require('./BlockStatement');

module.exports = NodeSchema.keys({
    param: NodeSchema, // Pattern
    body: BlockStatementSchema // BlockStatement
});
