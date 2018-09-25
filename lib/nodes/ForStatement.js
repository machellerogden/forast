'use strict';

const Node = require('./Node');

module.exports = (body, init = null, test = null, update = null) =>
    Node('ForStatement')({
        init,
        test,
        update,
        body
    });
