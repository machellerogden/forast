'use strict';

module.exports = ArrowFunctionExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const Identifier = require('./Identifier');

const schema = {
    params: Joi.array().items(Identifier.schema.optional()), // [ Pattern ] - TODO: add item schemas for ObjectPattern, ArrayPattern, RestElement, AssignmentPattern
    body: Node.schema, // FunctionBody | Expression
    expression: Joi.boolean().optional(), // boolean
    generator: Joi.boolean().optional() // boolean
};

function ArrowFunctionExpression(body, params = [], expression = true, generator = false) {

    const ast = Node('ArrowFunctionExpression')({
        params: Array.isArray(params) ? params : [ params ],
        body,
        expression,
        generator
    });

    return validate(ast, schema);
}

ArrowFunctionExpression.schema = Node.schema.keys(schema);
