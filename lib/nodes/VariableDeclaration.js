'use strict';

module.exports = VariableDeclaration;

function VariableDeclaration(declarations, kind = 'var') {
    if (arguments.length < 1) throw new Error('VariableDeclaration requires at least 1 argument');

    const ast = {
        type: 'VariableDeclaration',
        declarations,
        kind
    };

    return ast;
}
