'use strict';

module.exports = ArrayExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    elements: Joi.array().items(Node.schema.optional()) // [ Expression | null ]
};

function ArrayExpression(elements) {

    const ast = Node('ArrayExpression')({
        elements: Array.isArray(elements)
            ? elements
            : [ elements ]
    });

    return validate(ast, schema);
}

ArrayExpression.schema = Node.schema.keys(schema);
