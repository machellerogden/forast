'use strict';

const cast = require('../cast');
const { compose } = require('needful');
const {
    Identifier,
    ArrowFunctionExpression,
    BinaryExpression
} = require('require-dir')('../nodes');

const MemberCall = require('./MemberCall');

module.exports = (member, object, body, args) => MemberCall(member, object, [
        ArrowFunctionExpression(body, args) ]);
