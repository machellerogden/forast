'use strict';

const cast = require('../cast');

const MemberCall = require('../abstract/MemberCall');

module.exports = (member, object, value) => MemberCall(member, object, [ cast(value) ]);
