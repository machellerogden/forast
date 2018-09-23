'use strict';

module.exports = VariableDeclaration;

const { Node, validate } = require('../Node');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
    declarations: Joi.any(), // TODO
    kind: Joi.any() // TODO
};

function VariableDeclaration(declarations, kind = 'var') {
    if (arguments.length < 1) throw new Error('VariableDeclaration requires at least 1 argument');

    const ast = Node('VariableDeclaration')({
        declarations,
        kind
    });

    return validate(ast, schema);
}

VariableDeclaration.schema = Node.schema.keys(schema);
