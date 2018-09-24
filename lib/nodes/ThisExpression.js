'use strict';

module.exports = ThisExpression;

const { Node } = require('../Node');

function ThisExpression() {

    return Node('ThisExpression')();

}

ThisExpression.schema = Node.schema;
