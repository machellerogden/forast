'use strict';

const Node = require('./Node');

module.exports = (test, alternate, consequent) =>
    Node('ConditionalExpression')({
        test,
        alternate,
        consequent
    });
