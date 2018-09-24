'use strict';

module.exports = DebuggerStatement;

const { Node } = require('../Node');

function DebuggerStatement() {

    return Node('DebuggerStatement')();

}

DebuggerStatement.schema = Node.schema;
