'use strict';

module.exports = ArrowFunctionExpression;

const { Node, validate } = require('../Node');
const Joi = require('joi');

const Identifier = require('./Identifier');
//const Literal = require('./Literal');
//const BlockStatement = require('./BlockStatement');
//const SequenceExpression = require('./SequenceExpression');
//const UpdateExpression = require('./UpdateExpression');
//const CallExpression = require('./CallExpression');
//const AssignmentExpression = require('./AssignmentExpression');
//const ObjectExpression = require('./ObjectExpression');

const schema = {
    params: Joi.array().items(Identifier.schema.optional()),
    body: Node.schema,
    //body: Joi.alternatives().when('expression', {
        //is: Joi.valid(false),
        //then: BlockStatement.schema,
        //otherwise: Joi.alternatives().try(Literal.schema,
            //Identifier.schema,
            //CallExpression.schema,
            //ObjectExpression.schema,
            //AssignmentExpression.schema,
            //SequenceExpression.schema,
            //UpdateExpression.schema)
    //}),
    expression: Joi.boolean().optional(),
    generator: Joi.boolean().optional(),
    id: Joi.any().optional() // TODO
};

function ArrowFunctionExpression(body, params = [], expression = true, generator = false) {
    if (arguments.length <= 0) throw new Error('ArrowFunctionExpression requires at least 1 argument');

    const ast = Node('ArrowFunctionExpression')({
        params: Array.isArray(params) ? params : [ params ],
        body,
        expression,
        generator
    });

    return validate(ast, schema);
}

ArrowFunctionExpression.schema = Node.schema.keys(schema);
