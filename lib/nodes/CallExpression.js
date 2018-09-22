'use strict';

module.exports = CallExpression;

const { Node, NodeSchema, validate } = require('../Node');
const Joi = require('joi');

const Identifier = require('./Identifier');
const MemberExpression = require('./MemberExpression');

const schema = {
    callee: Joi.alternatives().try(Identifier.schema, MemberExpression.schema),
    arguments: Joi.array().items(Joi.any().optional())
};

function CallExpression(callee, args) {
    if (arguments.length <= 0) throw new Error('CallExpression requires at least 1 argument');

    const ast = Node('CallExpression')({
        callee,
        arguments: args
    });

    return validate(ast);
}

CallExpression.schema = NodeSchema.keys(schema);
