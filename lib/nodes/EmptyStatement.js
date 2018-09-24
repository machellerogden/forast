'use strict';

module.exports = EmptyStatement;

const { Node } = require('../Node');

function EmptyStatement() {

    return Node('EmptyStatement')();

}

EmptyStatement.schema = Node.schema;
