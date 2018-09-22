'use strict';

module.exports = MemberExpression;

const { Node } = require('../Node');

function MemberExpression(object, property, computed = false) {
    if (arguments.length <= 1) throw new Error('MemberExpression requires at least 2 arguments');

    const ast = Node('MemberExpression')({
        object,
        property,
        computed
    });

    return ast;
}
