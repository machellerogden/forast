'use strict';

const Joi = require('joi');
const ForastNode = Symbol('forast-node');
const { inspect } = require('util');

exports.Node = (type) => (args) => ({ ...args, type, [ForastNode]: true });
exports.Node.schema = Joi.object({ type: Joi.string().required() }).unknown();
exports.isNode = (node) => typeof node === 'object' && node[ForastNode];


exports.validate = (value, schema) => {
    if (!value[ForastNode]) throw Error(`not an valid forast node: ${inspect(value, { depth: null})}`);
    const s = exports.Node.schema.keys(schema)
    const { error } = Joi.validate(value, s, { presence: 'required' });
    if (error) throw error;
    return value;
}
