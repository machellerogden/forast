'use strict';

module.exports = BinaryExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    operator: Joi.string(),
    left: Joi.any(), // TODO
    right: Joi.any() // TODO
};

function BinaryExpression(operator, left, right) {
    if (arguments.length !== 3) throw new Error('BinaryExpression requires exactly 3 arguments');

    const ast = Node('BinaryExpression')({
        left,
        operator,
        right
    });

    return validate(ast);
}

BinaryExpression.schema = Node.schema.keys(schema);
