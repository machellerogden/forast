'use strict';

module.exports = VariableDeclarator;

const { Node, validate } = require('../Node');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
    id: Joi.any(), // TODO
    init: Joi.any() // TODO
};

function VariableDeclarator(id, init) {
    if (arguments.length < 1) throw new Error('VariableDeclarator requires at least 1 argument');

    const ast = Node('VariableDeclarator')({
        id,
        init
    });

    return validate(ast);
}

VariableDeclarator.schema = Node.schema.keys(schema);
