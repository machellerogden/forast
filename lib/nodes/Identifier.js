'use strict';

module.exports = Identifier;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    name: Joi.string(), // string
    computed: Joi.boolean().optional() // boolean
};

function Identifier(name, computed = false) {

    const ast = Node('Identifier')({
        name: typeof name === 'undefined'
            ? 'undefined'
            : name,
        computed
    });

    return validate(ast, schema);
}

Identifier.schema = Node.schema.keys(schema);
