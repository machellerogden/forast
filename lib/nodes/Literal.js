'use strict';

module.exports = Literal;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    value: Joi.any().invalid(Joi.object(), Joi.array(), Joi.func())
};

function Literal(value) {
    if (arguments.length !== 1) throw new Error('Literal requires exactly 1 argument');

    const ast = Node('Literal')({
        value
    });

    return validate(ast);
}

Literal.schema = Node.schema.keys(schema);
