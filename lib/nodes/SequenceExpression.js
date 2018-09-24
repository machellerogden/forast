'use strict';

module.exports = SequenceExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    expressions: Joi.array().items(Node.schema) // [ Expression ]
};

function SequenceExpression(expressions) {

    const ast = Node('SequenceExpression')({
        expressions: Array.isArray(expressions)
            ? expressions
            : [ expressions ]
    });

    return validate(ast, schema);
}

SequenceExpression.schema = Node.schema.keys(schema);
