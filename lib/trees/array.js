'use strict';

const cast = require('../cast');
const { partial, compose } = require('needful');

const MemberCallExpression = require('../abstract/MemberCallExpression');
const MemberBinaryCallbackExpression = require('../abstract/MemberBinaryCallbackExpression');

exports.Filter = partial(MemberBinaryCallbackExpression, 'filter');
exports.Every = partial(MemberBinaryCallbackExpression, 'every');
exports.Some = partial(MemberBinaryCallbackExpression, 'some');
exports.Find = partial(MemberBinaryCallbackExpression, 'find');

exports.Map = partial(MemberBinaryCallbackExpression, 'map');
exports.Sum = partial(exports.Map, '+');
exports.Product = partial(exports.Map, '*');

exports.FlatMap = partial(MemberBinaryCallbackExpression, 'flatMap');
exports.FlatSum = partial(exports.FlatMap, '+');
exports.FlatProduct = partial(exports.FlatMap, '*');

exports.Join = (subject, delim) => MemberCallExpression('join', subject, [ cast(delim) ]);
