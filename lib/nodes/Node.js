'use strict';

const Joi = require('joi');

const schemas = require('require-dir')('./schemas');

const Node = (type) => (args) => {

    const ast = { ...args, type };

    if (schemas[type] != null) {
        const { error } = Joi.validate(ast, schemas[type], { presence: 'required' });
        if (error) throw error;
    }

    return ast;
};

module.exports = Node;
