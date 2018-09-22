'use strict';

module.exports = Program;

const { Node } = require('../Node');

function Program(body, sourceType = 'script') {
    if (arguments.length < 1) throw new Error('Program requires at least 1 argument');

    const ast = Node('Program')({
        body: Array.isArray(body)
            ? body
            : [ body ],
        sourceType
    });

    return ast;
}
