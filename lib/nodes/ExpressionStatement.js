'use strict';

const Node = require('./Node');

module.exports = (expression) => 
    Node('ExpressionStatement')({
        expression
    });
