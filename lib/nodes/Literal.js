'use strict';

module.exports = Literal;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const schema = {
    value: Joi.any().valid(Joi.string(), Joi.boolean(), Joi.any().valid(null), Joi.number(), Joi.object().type(RegExp)) // string | boolean | null | number | RegExp;
};

function Literal(value) {

    const ast = Node('Literal')({
        value
    });

    return validate(ast);
}

Literal.schema = Node.schema.keys(schema);
