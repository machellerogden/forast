'use strict';

module.exports = BlockStatement;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    body: Joi.array().items(Node.schema.optional()) // [ Statement ]
};

function BlockStatement(body) {

    const ast = Node('BlockStatement')({
        body: Array.isArray(body)
            ? body
            : [ body ]
    });

    return validate(ast, schema);
}

BlockStatement.schema = Node.schema.keys(schema);
