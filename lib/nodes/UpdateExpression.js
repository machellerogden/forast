'use strict';

module.exports = UpdateExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    operator: Joi.string().valid('++', '--'), // UpdateOperator
    argument: Node.schema, // Expression
    prefix: Joi.boolean() // boolean
};

function UpdateExpression(operator, argument, prefix = false) {

    const ast = Node('UpdateExpression')({
        operator,
        argument,
        prefix
    });

    return validate(ast, schema);
}

UpdateExpression.schema = Node.schema.keys(schema);