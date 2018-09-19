'use strict';

const cast = require('../cast');
const { compose } = require('needful');
const {
    ExpressionStatement,
    CallExpression,
    MemberExpression,
    Identifier
} = require('require-dir')('../nodes');

module.exports = (fn, subject, args) => compose(
        ExpressionStatement,
        CallExpression)(
            MemberExpression(
                cast(subject), Identifier(fn)),
                args);
