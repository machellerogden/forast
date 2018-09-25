'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const BlockStatementSchema = require('./BlockStatement');
const CatchClauseSchema = require('./CatchClause');

module.exports = NodeSchema.keys({
    block: BlockStatementSchema, // BlockStatement
    handler: Joi.alternatives().try(CatchClauseSchema, null).optional(), // CatchClause | null
    finalizer: Joi.alternatives().try(BlockStatementSchema, null).optional() // BlockStatement | null
});
