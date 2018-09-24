'use strict';

module.exports = ExpressionStatement;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    expression: Node.schema // Expression
};

function ExpressionStatement(expression) {

    const ast = Node('ExpressionStatement')({
        expression
    });

    return validate(ast);
}

ExpressionStatement.schema = Node.schema.keys(schema);
