'use strict';

module.exports = VariableDeclarator;

const { Node } = require('../Node');

function VariableDeclarator(id, init) {
    if (arguments.length < 1) throw new Error('VariableDeclarator requires at least 1 argument');

    const ast = Node('VariableDeclarator')({
        id,
        init
    });

    return ast;
}
