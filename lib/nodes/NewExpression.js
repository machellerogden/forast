'use strict';

module.exports = NewExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    callee: Node.schema, // Expression
    arguments: Joi.array().items(Node.schema.optional()) // [ Expression ]
};

function NewExpression(callee, args) {

    const ast = Node('NewExpression')({
        callee,
        arguments: args
    });

    return validate(ast);
}

NewExpression.schema = Node.schema.keys(schema);
