'use strict';

const Joi = require('joi');

const NodeSchema = require('./Node');
const VariableDeclaratorSchema = require('./VariableDeclarator');

module.exports = NodeSchema.keys({
    declarations: Joi.array().items(VariableDeclaratorSchema), // [ VariableDeclarator ]
    kind: Joi.string().valid('var', 'let', 'const') // 'var', 'let', 'const'
});
