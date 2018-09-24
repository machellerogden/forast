'use strict';

module.exports = VariableDeclarator;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    id: Node.schema, // Pattern
    init: Node.schema.optional() // Expression | null
};

function VariableDeclarator(id, init) {

    const ast = Node('VariableDeclarator')({
        id,
        init
    });

    return validate(ast, schema);
}

VariableDeclarator.schema = Node.schema.keys(schema);
