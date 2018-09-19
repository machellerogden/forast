'use strict';

const { partial } = require('needful');

const BinaryExpression = require('../abstract/BinaryExpression');

exports.Equals = exports.Eq = partial(BinaryExpression, '==');
exports.StrictEquals = partial(BinaryExpression, '===');
exports.NotEquals = exports.NotEq = partial(BinaryExpression, '!=');
exports.StrictNotEquals = partial(BinaryExpression, '!==');
exports.GreaterThan = exports.GT = partial(BinaryExpression, '>');
exports.GreaterThanOrEqualTo = exports.GTE = partial(BinaryExpression, '>=');
exports.LessThan = exports.LT = partial(BinaryExpression, '<');
exports.LessThanOrEqualTo = exports.LTE = partial(BinaryExpression, '<=');
exports.Modulus = exports.Mod = partial(BinaryExpression, '%');
exports.Add = exports.Concat = partial(BinaryExpression, '+');
exports.Subtract = partial(BinaryExpression, '-');
exports.Multiply = partial(BinaryExpression, '*');
exports.Divide = partial(BinaryExpression, '/');
