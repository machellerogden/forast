'use strict';

module.exports = Program;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    body: Joi.array().items(Node.schema), // [ Directive | Statement ]
    sourceType: Joi.string().valid('script', 'module').optional()
};

function Program(body, sourceType = 'script') {
    if (arguments.length < 1) throw new Error('Program requires at least 1 argument');

    const ast = Node('Program')({
        body: Array.isArray(body)
            ? body
            : [ body ],
        sourceType
    });

    return ast;
}
