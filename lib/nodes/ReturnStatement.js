'use strict';

module.exports = ReturnStatement;

const { Node } = require('../Node');

function ReturnStatement(argument) {
    if (arguments.length !== 1) throw new Error('ReturnStatement requires exactly 1 argument');

    const ast = Node('ReturnStatement')({
        argument
    });

    return ast;
}
