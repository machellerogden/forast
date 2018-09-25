'use strict';

const Node = require('./Node');

module.exports = (discriminant, cases) =>
    Node('SwitchStatement')({
        discriminant,
        cases: Array.isArray(cases)
            ? cases
            : [ cases ]
    });
