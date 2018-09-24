'use strict';

const Node = require('./Node');

module.exports = (object, property, computed = false) =>
    Node('MemberExpression')({
        object,
        property,
        computed
    });
