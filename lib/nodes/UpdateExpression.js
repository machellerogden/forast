'use strict';

module.exports = UpdateExpression;

const { Node, NodeSchema, validate } = require('../Node');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
    operator: Joi.string(),
    argument: Identifier.schema,
    prefix: Joi.boolean()
};

function UpdateExpression(operator, argument, prefix = false) {
    if (arguments.length < 2) throw new Error('UpdateExpression requires at least 2 arguments');

    const ast = Node('UpdateExpression')({
        operator,
        argument,
        prefix
    });

    return validate(ast);
}

UpdateExpression.schema = NodeSchema.keys(schema);
