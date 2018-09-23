'use strict';

module.exports = MemberExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    object: Joi.any(), // TODO
    property: Joi.any(), // TODO
    computed: Joi.boolean().optional()
};


function MemberExpression(object, property, computed = false) {
    if (arguments.length <= 1) throw new Error('MemberExpression requires at least 2 arguments');

    const ast = Node('MemberExpression')({
        object,
        property,
        computed
    });

    return validate(ast);
}

MemberExpression.schema = Node.schema.keys(schema);
