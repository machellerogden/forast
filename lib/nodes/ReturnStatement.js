'use strict';

module.exports = ReturnStatement;

function ReturnStatement(argument) {
    if (arguments.length !== 1) throw new Error('ReturnStatement requires exactly 1 argument');

    const ast = {
        type: 'ReturnStatement',
        argument
    };

    return ast;
}
