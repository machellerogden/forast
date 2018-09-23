'use strict';

module.exports = ObjectExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    properties: Joi.any() // TODO
};

function ObjectExpression(properties) {
    if (arguments.length !== 1) throw new Error('ObjectExpression requires exactly 1 argument');

    const ast = Node('ObjectExpression')({
        properties
    });

    return validate(ast);
}

ObjectExpression.schema = Node.schema.keys(schema);
