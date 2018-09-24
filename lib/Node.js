'use strict';

const Joi = require('joi');

exports.Node = (type) => (args) => ({ ...args, type });

exports.isNode = (node) => node != null && node.type;

exports.Node.schema = Joi.object({ type: Joi.string().required() }).unknown();

exports.validate = (value, schema) => {
    const s = exports.Node.schema.keys(schema)
    const { error } = Joi.validate(value, s, { presence: 'required' });
    if (error) throw error;
    return value;
}
