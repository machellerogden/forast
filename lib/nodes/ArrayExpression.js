'use strict';

module.exports = ArrayExpression;

const { Node, NodeSchema, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    elements: Joi.array().items(NodeSchema.keys({}))
};

function ArrayExpression(elements) {
    if (arguments.length !== 1) throw new Error('ArrayExpression requires exactly 1 argument');

    const ast = Node('ArrayExpression')({
        elements: Array.isArray(elements)
            ? elements
            : [ elements ]
    });

    return validate(ast, schema);
}

ArrayExpression.schema = NodeSchema.keys(schema);
