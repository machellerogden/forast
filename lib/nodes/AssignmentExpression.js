'use strict';

module.exports = AssignmentExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    operator: Joi.string(),
    left: Joi.any(), // TODO
    right: Joi.any() // TODO
};

function AssignmentExpression(operator, left, right) {
    if (arguments.length !== 3) throw new Error('AssignmentExpression requires exactly 3 arguments');

    const ast = Node('AssignmentExpression')({
        left,
        operator,
        right
    });

    return validate(ast);
}

AssignmentExpression.schema = Node.schema.keys(schema);
