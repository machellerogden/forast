'use strict';

const chai = require('chai');
const { expect } = chai;

const forast = require('..');

describe('forast', () => {

    describe('nodes', () => {

        it('Node', () => {

            expect(forast.nodes.Node('Foo')).to.be.a('function');

            expect(forast.nodes.Node('Foo')({ bar: 'baz' })).to.eql({
                type: 'Foo',
                bar: 'baz'
            });

            expect(forast.nodes.Node('BinaryExpression')({
                operator: '==',
                left: {
                    type: 'Identifier',
                    name: 'foo'
                },
                right: {
                    type: 'Literal',
                    value: 'bar'
                }
            })).to.eql({
                type: 'BinaryExpression',
                operator: '==',
                left: {
                    type: 'Identifier',
                    name: 'foo'
                },
                right: {
                    type: 'Literal',
                    value: 'bar'
                }
            });

            expect(() => forast.nodes.Node('BinaryExpression')({
                bar: 'baz'
            })).to.throw('fails because');
        });

        it('ArrayExpression', () => {

            expect(forast.nodes.ArrayExpression([
                {
                    type: 'Literal',
                    value: 'foo'
                }
            ])).to.eql({
                elements: [
                    {
                        type: 'Literal',
                        value: 'foo'
                    }
                ],
                type: 'ArrayExpression'
            });
        });

        it('ArrowFunctionExpression', () => {

            expect(forast.nodes.ArrowFunctionExpression({
                type: 'Identifier',
                name: 'v'
            }, [], true)).to.eql({
                type: 'ArrowFunctionExpression',
                generator: false,
                expression: true,
                params: [],
                body: {
                    type: 'Identifier',
                    name: 'v'
                }
            });
        });

        it('AssignmentExpression', () => {

            expect(forast.nodes.AssignmentExpression('=', {
                type: 'Identifier',
                name: 'v'
            }, {
                type: 'Literal',
                value: 'foo'
            })).to.eql({
                type: 'AssignmentExpression',
                operator: '=',
                left: { type: 'Identifier', name: 'v' },
                right: { type: 'Literal', value: 'foo' }
            });
        });

        it('BinaryExpression', () => {

            expect(forast.nodes.BinaryExpression('==', {
                type: 'Identifier',
                name: 'v'
            }, {
                type: 'Literal',
                value: 'foo'
            })).to.eql({
                type: 'BinaryExpression',
                operator: '==',
                left: { type: 'Identifier', name: 'v' },
                right: { type: 'Literal', value: 'foo' }
            });
        });

        it('BlockStatement', () => {

            expect(forast.nodes.BlockStatement([ { type: 'EmptyStatement' } ])).to.eql({
                type: 'BlockStatement',
                body: [ { type: 'EmptyStatement' } ]
            });

            expect(forast.nodes.BlockStatement({ type: 'EmptyStatement' })).to.eql({
                type: 'BlockStatement',
                body: [ { type: 'EmptyStatement' } ]
            });
        });

        it('CallExpression', () => {

            expect(forast.nodes.CallExpression({
                type: 'Identifier',
                name: 'foo'
            }, [ {
                type: 'Literal',
                value: 'bar'
            } ])).to.eql({
                type: 'CallExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Literal', value: 'bar' } ]
            });

            expect(forast.nodes.CallExpression({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'Literal',
                value: 'bar'
            })).to.eql({
                type: 'CallExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Literal', value: 'bar' } ]
            });
        });

        it('ExpressionStatement', () => {

            expect(forast.nodes.ExpressionStatement({
                type: 'UnaryExpression',
                argument: {
                    type: 'Identifier',
                    name: 'foo'
                },
                prefix: false
            })).to.eql({
                type: 'ExpressionStatement',
                expression: { type: 'UnaryExpression', argument: { type: 'Identifier', name: 'foo' }, prefix: false }
            });
        });

        it('Identifier', () => {

            expect(forast.nodes.Identifier('v')).to.eql({
                type: 'Identifier',
                name: 'v',
                computed: false
            });
        });

        it('Literal', () => {

            expect(forast.nodes.Literal('abc')).to.eql({
                type: 'Literal',
                value: 'abc'
            });

            expect(forast.nodes.Literal(123)).to.eql({
                type: 'Literal',
                value: 123
            });

            expect(forast.nodes.Literal(true)).to.eql({
                type: 'Literal',
                value: true
            });
        });

        it('MemberExpression', () => {

            expect(forast.nodes.MemberExpression({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'Identifier',
                name: 'bar'
            })).to.eql({
                type: 'MemberExpression',
                object: { type: 'Identifier', name: 'foo' },
                property: { type: 'Identifier', name: 'bar' },
                computed: false
            });
        });

        it('NewExpression', () => {

            expect(forast.nodes.NewExpression({
                type: 'Identifier',
                name: 'foo'
            }, [ {
                type: 'Identifier',
                name: 'bar'
            } ])).to.eql({
                type: 'NewExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Identifier', name: 'bar' } ]
            });

            expect(forast.nodes.NewExpression({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'Identifier',
                name: 'bar'
            })).to.eql({
                type: 'NewExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Identifier', name: 'bar' } ]
            });
        });

        it('ObjectExpression', () => {
            expect(forast.nodes.ObjectExpression([
                {
                    type: 'Property',
                    key: {
                        type: 'Identifier',
                        name: 'foo'
                    },
                    value: {
                        type: 'Literal',
                        value: 'bar'
                    }
                }
            ])).to.eql({
                type: 'ObjectExpression',
                properties: [
                    {
                        type: 'Property',
                        key: {
                            name: 'foo',
                            type: 'Identifier'
                        },
                        value: {
                            type: 'Literal',
                            value: 'bar'
                        }
                    }
                ]
            });

            expect(forast.nodes.ObjectExpression({
                type: 'Property',
                key: {
                    type: 'Identifier',
                    name: 'foo'
                },
                value: {
                    type: 'Literal',
                    value: 'bar'
                }
            })).to.eql({
                type: 'ObjectExpression',
                properties: [
                    {
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'foo'
                        },
                        value: {
                            type: 'Literal',
                            value: 'bar'
                        }
                    }
                ]
            });
        });

        it('Program', () => {

            expect(forast.nodes.Program([ {
                type: 'EmptyStatement'
            } ])).to.eql({
                type: 'Program',
                body: [
                    {
                        type: 'EmptyStatement'
                    }
                ],
                sourceType: 'script'
            });

            expect(() => forast.nodes.Program([ ])).to.throw('fails because');
        });

        it('Property', () => {

            expect(forast.nodes.Property({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'Literal',
                value: 'bar'
            })).to.eql({
                type: 'Property',
                key: {
                    name: 'foo',
                    type: 'Identifier'
                },
                value: {
                    type: 'Literal',
                    value: 'bar'
                },
                kind: 'init',
                method: false,
                computed: false,
                shorthand: false
            });
        });

        it('RegExpLiteral', () => {
            expect(forast.nodes.RegExpLiteral('foo', 'g')).to.eql({
                type: 'Literal',
                value: new RegExp('foo', 'g'),
                regex: {
                    pattern: 'foo',
                    flags: 'g'
                }
            });
        });

        it('ReturnStatement', () => {

            expect(forast.nodes.ReturnStatement({
                type: 'Literal',
                value: 'bar'
            })).to.eql({
                type: 'ReturnStatement',
                argument: {
                    type: 'Literal',
                    value: 'bar'
                }
            });
        });

        it('SequenceExpression', () => {

            expect(forast.nodes.SequenceExpression([ {
                type: 'BinaryExpression',
                operator: '==',
                left: {
                    type: 'Identifier',
                    name: 'foo'
                },
                right: {
                    type: 'Literal',
                    value: 'bar'
                }
            } ])).to.eql({
                type: 'SequenceExpression',
                expressions: [ {
                    type: 'BinaryExpression',
                    operator: '==',
                    left: {
                        type: 'Identifier',
                        name: 'foo'
                    },
                    right: {
                        type: 'Literal',
                        value: 'bar'
                    }
                } ]
            });
            expect(forast.nodes.SequenceExpression({
                type: 'BinaryExpression',
                operator: '==',
                left: {
                    type: 'Identifier',
                    name: 'foo'
                },
                right: {
                    type: 'Literal',
                    value: 'bar'
                }
            })).to.eql({
                type: 'SequenceExpression',
                expressions: [ {
                    type: 'BinaryExpression',
                    operator: '==',
                    left: {
                        type: 'Identifier',
                        name: 'foo'
                    },
                    right: {
                        type: 'Literal',
                        value: 'bar'
                    }
                } ]
            });
            expect(() => forast.nodes.SequenceExpression([ ])).to.throw('fails because');
        });

        it('ThisExpression', () => {

            expect(forast.nodes.ThisExpression()).to.eql({
                type: 'ThisExpression'
            });
        });

        it('UnaryExpression', () => {

            expect(forast.nodes.UnaryExpression('typeof', {
                type: 'Identifer',
                name: 'foo'
            })).to.eql({
                type: 'UnaryExpression',
                operator: 'typeof',
                argument: {
                    type: 'Identifer',
                    name: 'foo'
                },
                prefix: true
            });
        });

        it('UpdateExpression', () => {

            expect(forast.nodes.UpdateExpression('++', {
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'UpdateExpression',
                operator: '++',
                argument: {
                    type: 'Identifier',
                    name: 'foo'
                },
                prefix: false
            });
        });

        it('VariableDeclaration', () => {

            expect(forast.nodes.VariableDeclaration([ {
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'foo'
                }
            } ], 'const')).to.eql({
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'foo'
                    }
                } ],
                kind: 'const'
            });

            expect(forast.nodes.VariableDeclaration({
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'foo'
                }
            }, 'const')).to.eql({
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'foo'
                    }
                } ],
                kind: 'const'
            });
        });

        it('VariableDeclarator', () => {
            expect(forast.nodes.VariableDeclarator({
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'foo'
                },
                init: null
            });
        });

        it('WithStatement');
        it('LabeledStatement');
        it('BreakStatement');
        it('ContinueStatement');
        it('IfStatement');
        it('SwitchStatement');
        it('SwitchCase');
        it('ThrowStatement');
        it('TryStatement');
        it('CatchClause');
        it('WhileStatement');
        it('DoWhileStatement');
        it('ForStatement');
        it('ForInStatement');
        it('ForOfStatement');
        it('FunctionDeclaration');
        it('FunctionExpression');
        it('LogicalExpression');
        it('ConditionalExpression');
    });
});
