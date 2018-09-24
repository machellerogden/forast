'use strict';

const Node = require('./Node');

module.exports = (key, value, kind = 'init', method = false, shorthand = false, computed = false) =>
    Node('Property')({
        key,
        value,
        kind,
        method,
        shorthand,
        computed
    });
