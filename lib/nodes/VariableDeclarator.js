'use strict';

module.exports = VariableDeclarator;

function VariableDeclarator(id, init) {
    if (arguments.length < 1) throw new Error('VariableDeclarator requires at least 1 argument');

    const ast = {
        type: 'VariableDeclarator',
        id,
        init
    };

    return ast;
}
