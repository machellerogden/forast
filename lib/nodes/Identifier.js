'use strict';

module.exports = Identifier;

const { Node, NodeSchema, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    name: Joi.string(),
    computed: Joi.boolean().optional()
};

function Identifier(name, computed = false) {
    if (arguments.length <= 0) throw new Error('Identifier requires at least 1 argument');

    const ast = Node('Identifier')({
        name: typeof name === 'undefined'
            ? 'undefined'
            : name,
        computed
    });

    return validate(ast);
}

Identifier.schema = NodeSchema.keys(schema);
