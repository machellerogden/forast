'use strict';

module.exports = UnaryExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    operator: Joi.string().valid( "-", "+", "!", "~", "typeof", "void", "delete"), // UnaryOperator
    argument: Node.schema, // Expression
    prefix: Joi.boolean() // boolean
};

function UnaryExpression(operator, argument, prefix = true) {

    const ast = Node('UnaryExpression')({
        operator,
        argument,
        prefix
    });

    return validate(ast, schema);
}

UnaryExpression.schema = Node.schema.keys(schema);
