'use strict';

module.exports = ReturnStatement;

const { Node, validate } = require('../Node');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
        argument: Joi.any() // TODO
};

function ReturnStatement(argument) {
    if (arguments.length !== 1) throw new Error('ReturnStatement requires exactly 1 argument');

    const ast = Node('ReturnStatement')({
        argument
    });

    return validate(ast);
}

ReturnStatement.schema = Node.schema.keys(schema);
