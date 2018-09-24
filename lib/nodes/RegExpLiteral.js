'use strict';

module.exports = RegExpLiteral;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    pattern: Joi.string(), // string
    flags: Joi.string() // string
};

function RegExpLiteral(value) {

    const ast = Node('RegExpLiteral')({
        value
    });

    return validate(ast, schema);
}

RegExpLiteral.schema = Node.schema.keys(schema);
