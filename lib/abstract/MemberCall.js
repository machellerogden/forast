'use strict';

const cast = require('../cast');
const { compose } = require('needful');
const {
    ExpressionStatement,
    CallExpression,
    MemberExpression,
    Identifier
} = require('require-dir')('../nodes');

module.exports = (member, object, args) => compose(
        ExpressionStatement,
        CallExpression)(
            MemberExpression(
                cast(object), Identifier(member)),
                args);
