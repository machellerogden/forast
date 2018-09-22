'use strict';

module.exports = ExpressionStatement;

const { Node, NodeSchema, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    expression: Joi.any() // TODO
};

function ExpressionStatement(expression) {
    if (arguments.length !== 1) throw new Error('ExpressionStatement requires exactly 1 argument');

    const ast = Node('ExpressionStatement')({
        expression
    });

    return validate(ast);
}

ExpressionStatement.schema = NodeSchema.keys(schema);
