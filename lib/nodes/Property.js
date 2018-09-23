'use strict';

module.exports = Property;

const { Node, validate } = require('../Node');
const Literal = require('./Literal');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
        method: Joi.boolean(),
        shorthand: Joi.boolean(),
        computed: Joi.boolean(),
        key: Joi.alternatives().try(Literal.schema, Identifier.schema),
        value: Node.schema, // TODO
        kind: Joi.any() // TODO
};

function Property(key, value) {
    if (arguments.length !== 2) throw new Error('Property requires exactly 2 arguments');

    const ast = Node('Property')({
        method: false,
        shorthand: false,
        computed: false,
        key,
        value,
        kind: 'init'
    });

    return validate(ast);
}

Property.schema = Node.schema.keys(schema);
