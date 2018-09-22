'use strict';

module.exports = VariableDeclaration;

const { Node } = require('../Node');

function VariableDeclaration(declarations, kind = 'var') {
    if (arguments.length < 1) throw new Error('VariableDeclaration requires at least 1 argument');

    const ast = Node('VariableDeclaration')({
        declarations,
        kind
    });

    return ast;
}
