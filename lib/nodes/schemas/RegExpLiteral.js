'use strict';

const Joi = require('joi');

const Literal = require('./Literal');

module.exports = Literal.keys({
    regex: Joi.object().keys({
        pattern: Joi.string(), // string
        flags: Joi.string() // string
    })
});
