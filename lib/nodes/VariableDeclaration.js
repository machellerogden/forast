'use strict';

module.exports = VariableDeclaration;

const { Node, validate } = require('../Node');
const VariableDeclarator = require('./VariableDeclarator');
const Joi = require('joi');

const schema = {
    declarations: Joi.array().items(VariableDeclarator.schema), // [ VariableDeclarator ]
    kind: Joi.string().valid('var', 'let', 'const') // 'var', 'let', 'const'
};

function VariableDeclaration(declarations, kind = 'var') {

    const ast = Node('VariableDeclaration')({
        declarations,
        kind
    });

    return validate(ast, schema);
}

VariableDeclaration.schema = Node.schema.keys(schema);
