'use strict';

module.exports = ReturnStatement;

const { Node, validate } = require('../Node');
const Identifier = require('./Identifier');
const Joi = require('joi');

const schema = {
        argument: Node.schema.optional() // Expression | null
};

function ReturnStatement(argument) {

    const ast = Node('ReturnStatement')({
        argument
    });

    return validate(ast);
}

ReturnStatement.schema = Node.schema.keys(schema);
