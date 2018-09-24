'use strict';

module.exports = AssignmentExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    operator: Joi.string().valid('=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=', '|=', '^=', '&='), // AssignmentOperator
    left: Node.schema, // Pattern | Expression
    right: Node.schema // Expression
};

function AssignmentExpression(operator, left, right) {

    const ast = Node('AssignmentExpression')({
        left,
        operator,
        right
    });

    return validate(ast, schema);
}

AssignmentExpression.schema = Node.schema.keys(schema);
