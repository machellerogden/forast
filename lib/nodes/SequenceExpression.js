'use strict';

module.exports = SequenceExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    expressions: Joi.array().items(Node.schema.keys({}))
};

function SequenceExpression(expressions) {
    if (arguments.length !== 1) throw new Error('SequenceExpression requires exactly 1 argument');

    const ast = Node('SequenceExpression')({
        expressions: Array.isArray(expressions)
            ? expressions
            : [ expressions ]
    });

    return validate(ast);
}

SequenceExpression.schema = Node.schema.keys(schema);
