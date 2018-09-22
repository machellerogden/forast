'use strict';

const Joi = require('joi');
const ForastNode = Symbol('forast-node');
const { inspect } = require('util');

exports.Node = (type) => (args) => ({ ...args, type, [ForastNode]: true });

exports.isNode = (node) => typeof node === 'object' && node[ForastNode];

const NodeSchema = exports.NodeSchema = Joi.object({ type: Joi.string().required() }).unknown();

exports.validate = (v, schema) => {
    if (!v[ForastNode]) throw Error(`not an valid forast node: ${inspect(v, { depth: null})}`);
    const s = NodeSchema.keys(schema)
    const { error, value } = Joi.validate(v, s, { presence: 'required' });
    if (error) throw error;
    return value;
}
