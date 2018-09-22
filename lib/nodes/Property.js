'use strict';

module.exports = Property;

const { Node } = require('../Node');

const Identifier = require('./Identifier');

function Property(key, value) {
    if (arguments.length !== 2) throw new Error('Property requires exactly 2 arguments');

    const ast = Node('Property')({
        method: false,
        shorthand: false,
        computed: false,
        key,
        value, // must be one of: Literal, ObjectExpression, ArrayExpression
        kind: 'init'
    });

    return ast;
}
