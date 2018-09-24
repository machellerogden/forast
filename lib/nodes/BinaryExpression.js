'use strict';

module.exports = BinaryExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    operator: Joi.string().valid("==", "!=", "===", "!==", "<", "<=", ">", ">=", "<<", ">>", ">>>", "+", "-", "*", "/", "%", "|", "^", "&", "in", "instanceof"), // BinaryOperator
    left: Node.schema, // Expression
    right: Node.schema // Expression
};

function BinaryExpression(operator, left, right) {

    const ast = Node('BinaryExpression')({
        left,
        operator,
        right
    });

    return validate(ast, schema);
}

BinaryExpression.schema = Node.schema.keys(schema);
