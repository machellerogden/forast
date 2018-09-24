'use strict';

module.exports = Property;

const { Node, validate } = require('../Node');
const Literal = require('./Literal');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
        method: Joi.boolean().optional(), // boolean
        shorthand: Joi.boolean().optional(), // boolean
        computed: Joi.boolean().optional(), // boolean
        key: Joi.alternatives().try(Literal.schema, Identifier.schema), // Literal | Identifier
        value: Node.schema, // Expression
        kind: Joi.string().valid('init', 'get', 'set').optional() // 'init', 'get', 'set'
};

function Property(key, value, kind = 'init', method = false, shorthand = false, computed = false) {

    const ast = Node('Property')({
        key,
        value,
        kind,
        method,
        shorthand,
        computed
    });

    return validate(ast, schema);
}

Property.schema = Node.schema.keys(schema);
