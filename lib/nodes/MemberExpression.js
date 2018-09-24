'use strict';

module.exports = MemberExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    object: Node.schema, // Expression
    property: Node.schema, // Expression
    computed: Joi.boolean().optional() // boolean
};


function MemberExpression(object, property, computed = false) {

    const ast = Node('MemberExpression')({
        object,
        property,
        computed
    });

    return validate(ast, schema);
}

MemberExpression.schema = Node.schema.keys(schema);
