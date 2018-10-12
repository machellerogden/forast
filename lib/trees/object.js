'use strict';

const requireDir = require('require-dir');
const { partial } = require('needful');

const { Identifier } = requireDir('../nodes');
const { MemberCall_Unary } = requireDir('../abstract');

exports.Keys = partial(MemberCall_Unary, 'keys', Identifier('Object'));
exports.Values = partial(MemberCall_Unary, 'values', Identifier('Object'));
