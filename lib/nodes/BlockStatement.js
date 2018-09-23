'use strict';

module.exports = BlockStatement;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    body: Joi.array().items(Node.schema.keys({}))
};

function BlockStatement(body) {
    if (arguments.length !== 1) throw new Error('BlockStatement requires exactly 1 argument');

    const ast = Node('BlockStatement')({
        body: Array.isArray(body)
            ? body
            : [ body ]
    });

    return validate(ast, schema);
}

BlockStatement.schema = Node.schema.keys(schema);
