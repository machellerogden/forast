'use strict';

module.exports = ObjectExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const Property = require('./Property');

const schema = {
    properties: Joi.array().items(Property.schema.optional()) // [ Property ]
};

function ObjectExpression(properties) {

    const ast = Node('ObjectExpression')({
        properties: Array.isArray(properties)
            ? properties
            : [ properties ]
    });

    return validate(ast, schema);
}

ObjectExpression.schema = Node.schema.keys(schema);
