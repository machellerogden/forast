'use strict';

const Node = require('./Node');

module.exports = (consequent, test = null) =>
    Node('SwitchCase')({
        test,
        consequent: Array.isArray(consequent)
            ? consequent
            : [ consequent ]
    });
