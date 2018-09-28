'use strict';

const { partial } = require('needful');

const BinaryExpression = require('../abstract/BinaryExpression');

exports.Equals = partial(BinaryExpression, '==');
exports.StrictEquals = partial(BinaryExpression, '===');
exports.NotEquals = partial(BinaryExpression, '!=');
exports.StrictNotEquals = partial(BinaryExpression, '!==');
exports.GreaterThan = partial(BinaryExpression, '>');
exports.GreaterThanOrEqualTo = partial(BinaryExpression, '>=');
exports.LessThan = partial(BinaryExpression, '<');
exports.LessThanOrEqualTo = partial(BinaryExpression, '<=');
exports.Modulus = partial(BinaryExpression, '%');
exports.Add = exports.Concat = partial(BinaryExpression, '+');
exports.Subtract = partial(BinaryExpression, '-');
exports.Multiply = partial(BinaryExpression, '*');
exports.Divide = partial(BinaryExpression, '/');
