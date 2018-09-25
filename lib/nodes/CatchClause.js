'use strict';

const Node = require('./Node');

module.exports = (param, body) =>
    Node('CatchClause')({
        param,
        body
    });
