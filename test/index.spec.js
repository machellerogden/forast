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
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'UnaryExpression',
                operator: 'typeof',
                argument: {
                    type: 'Identifier',
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
                }
            });
            expect(forast.nodes.VariableDeclarator({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'Literal',
                value: 'bar'
            })).to.eql({
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'foo'
                },
                init: {
                    type: 'Literal',
                    value: 'bar'
                }
            });
        });

        it('WithStatement', () => {

            expect(forast.nodes.WithStatement({
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
            }, {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'Identifier',
                            name: 'foo'
                        }
                    }
                ]
            })).to.eql({
                type: 'WithStatement',
                object: {
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
                },
                body: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'Identifier',
                                name: 'foo'
                            }
                        }
                    ]
                }
            });
        });

        it('LabeledStatement', () => {

            expect(forast.nodes.LabeledStatement({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'Identifier',
                            name: 'foo'
                        }
                    }
                ]
            })).to.eql({
                type: 'LabeledStatement',
                label: {
                    type: 'Identifier',
                    name: 'foo'
                },
                body: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'Identifier',
                                name: 'foo'
                            }
                        }
                    ]
                }
            });
        });

        it('BreakStatement', () => {

            expect(forast.nodes.BreakStatement({
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'BreakStatement',
                label: {
                    type: 'Identifier',
                    name: 'foo'
                }
            });

            expect(forast.nodes.BreakStatement()).to.eql({
                type: 'BreakStatement',
                label: null
            });
        });

        it('ContinueStatement', () => {

            expect(forast.nodes.ContinueStatement({
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'ContinueStatement',
                label: {
                    type: 'Identifier',
                    name: 'foo'
                }
            });

            expect(forast.nodes.ContinueStatement()).to.eql({
                type: 'ContinueStatement',
                label: null
            });
        });

        it('IfStatement', () => {

            expect(forast.nodes.IfStatement({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'ExpressionStatement',
                expression: {
                    type: 'Literal',
                    value: true
                }
            })).to.eql({
                type: 'IfStatement',
                test: {
                    type: 'Identifier',
                    name: 'foo'
                },
                consequent: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: true
                    }
                },
                alternate: null
            });

            expect(forast.nodes.IfStatement({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'ExpressionStatement',
                expression: {
                    type: 'Literal',
                    value: true
                }
            }, {
                type: 'ExpressionStatement',
                expression: {
                    type: 'Literal',
                    value: false
                }
            })).to.eql({
                type: 'IfStatement',
                test: {
                    type: 'Identifier',
                    name: 'foo'
                },
                consequent: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: true
                    }
                },
                alternate: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: false
                    }
                }
            });

        });

        it('SwitchStatement', () => {

            expect(forast.nodes.SwitchStatement({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'SwitchCase',
                test: {
                    type: 'Literal',
                    value: 'bar'
                },
                consequent: [ {
                    type: 'BreakStatement'
                } ]
            })).to.eql({
                type: 'SwitchStatement',
                discriminant: {
                    type: 'Identifier',
                    name: 'foo'
                },
                cases: [ {
                    type: 'SwitchCase',
                    test: {
                        type: 'Literal',
                        value: 'bar'
                    },
                    consequent: [ {
                        type: 'BreakStatement'
                    } ]
                } ]
            });
        });

        it('SwitchCase', () => {

            expect(forast.nodes.SwitchCase([ {
                type: 'BreakStatement'
            } ], {
                type: 'Literal',
                value: 'bar'
            })).to.eql({
                type: 'SwitchCase',
                test: {
                    type: 'Literal',
                    value: 'bar'
                },
                consequent: [ {
                    type: 'BreakStatement'
                } ]
            });

            expect(forast.nodes.SwitchCase({
                type: 'BreakStatement'
            }, {
                type: 'Literal',
                value: 'bar'
            })).to.eql({
                type: 'SwitchCase',
                test: {
                    type: 'Literal',
                    value: 'bar'
                },
                consequent: [ {
                    type: 'BreakStatement'
                } ]
            });

            expect(forast.nodes.SwitchCase({
                type: 'BreakStatement'
            })).to.eql({
                type: 'SwitchCase',
                test: null,
                consequent: [ {
                    type: 'BreakStatement'
                } ]
            });
        });

        it('ThrowStatement', () => {

            expect(forast.nodes.ThrowStatement({
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'ThrowStatement',
                argument: {
                    type: 'Identifier',
                    name: 'foo'
                }
            });

        });

        it('TryStatement', () => {

            expect(forast.nodes.TryStatement({
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'Identifier',
                            name: 'foo'
                        }
                    }
                ]
            })).to.eql({
                type: 'TryStatement',
                block: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'Identifier',
                                name: 'foo'
                            }
                        }
                    ]
                },
                handler: null,
                finalizer: null
            });

        });

        it('CatchClause', () => {

            expect(forast.nodes.CatchClause({
                type: 'Identifier',
                name: 'err'
            }, {
                type: 'BlockStatement',
                body: [ ]
            })).to.eql({
                type: 'CatchClause',
                param: {
                    type: 'Identifier',
                    name: 'err'
                },
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                }
            });

        });

        it('WhileStatement', () => {

            expect(forast.nodes.WhileStatement({
                type: 'Literal',
                value: true
            }, {
                type: 'BlockStatement',
                body: [ ]
            })).to.eql({
                type: 'WhileStatement',
                test: {
                    type: 'Literal',
                    value: true
                },
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                }
            });

        });

        it('DoWhileStatement', () => {

            expect(forast.nodes.DoWhileStatement({
                type: 'BlockStatement',
                body: [ ]
            }, {
                type: 'Literal',
                value: true
            })).to.eql({
                type: 'DoWhileStatement',
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                },
                test: {
                    type: 'Literal',
                    value: true
                }
            });

        });

        it('ForStatement', () => {

            expect(forast.nodes.ForStatement({
                type: 'BlockStatement',
                body: [ ]
            }, {
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    init: {
                        type: 'Literal',
                        value: 0
                    }
                } ],
                kind: 'let'
            }, {
                type: 'BinaryExpression',
                operator: '>=',
                left: {
                    type: 'Identifier',
                    name: 'i'
                },
                right: {
                    type: 'Literal',
                    value: 10
                }
            }, {
                type: 'UpdateExpression',
                operator: '++',
                argument: {
                    type: 'Identifier',
                    name: 'i'
                },
                prefix: false
            })).to.eql({
                type: 'ForStatement',
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                },
                init: {
                    type: 'VariableDeclaration',
                    declarations: [ {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i'
                        },
                        init: {
                            type: 'Literal',
                            value: 0
                        }
                    } ],
                    kind: 'let'
                },
                test: {
                    type: 'BinaryExpression',
                    operator: '>=',
                    left: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    right: {
                        type: 'Literal',
                        value: 10
                    }
                },
                update: {
                    type: 'UpdateExpression',
                    operator: '++',
                    argument: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    prefix: false
                }
            });

            expect(forast.nodes.ForStatement({
                type: 'BlockStatement',
                body: [ ]
            }, {
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    init: {
                        type: 'Literal',
                        value: 0
                    }
                } ],
                kind: 'let'
            }, {
                type: 'BinaryExpression',
                operator: '>=',
                left: {
                    type: 'Identifier',
                    name: 'i'
                },
                right: {
                    type: 'Literal',
                    value: 10
                }
            })).to.eql({
                type: 'ForStatement',
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                },
                init: {
                    type: 'VariableDeclaration',
                    declarations: [ {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i'
                        },
                        init: {
                            type: 'Literal',
                            value: 0
                        }
                    } ],
                    kind: 'let'
                },
                test: {
                    type: 'BinaryExpression',
                    operator: '>=',
                    left: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    right: {
                        type: 'Literal',
                        value: 10
                    }
                },
                update: null
            });

            expect(forast.nodes.ForStatement({
                type: 'BlockStatement',
                body: [ ]
            }, {
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    init: {
                        type: 'Literal',
                        value: 0
                    }
                } ],
                kind: 'let'
            })).to.eql({
                type: 'ForStatement',
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                },
                init: {
                    type: 'VariableDeclaration',
                    declarations: [ {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i'
                        },
                        init: {
                            type: 'Literal',
                            value: 0
                        }
                    } ],
                    kind: 'let'
                },
                test: null,
                update: null
            });

            expect(forast.nodes.ForStatement({
                type: 'BlockStatement',
                body: [ ]
            }, {
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    init: {
                        type: 'Literal',
                        value: 0
                    }
                } ],
                kind: 'let'
            }, null, {
                type: 'UpdateExpression',
                operator: '++',
                argument: {
                    type: 'Identifier',
                    name: 'i'
                },
                prefix: false
            })).to.eql({
                type: 'ForStatement',
                body: {
                    type: 'BlockStatement',
                    body: [ ]
                },
                init: {
                    type: 'VariableDeclaration',
                    declarations: [ {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i'
                        },
                        init: {
                            type: 'Literal',
                            value: 0
                        }
                    } ],
                    kind: 'let'
                },
                test: null,
                update: {
                    type: 'UpdateExpression',
                    operator: '++',
                    argument: {
                        type: 'Identifier',
                        name: 'i'
                    },
                    prefix: false
                }
            });
        });

        it('ForInStatement', () => {
            expect(forast.nodes.ForInStatement({
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: {
                        type: 'MemberExpression',
                        object: {
                            type: 'Identifier',
                            name: 'console'
                        },
                        property: {
                            type: 'Identifier',
                            name: 'log'
                        },
                        computed: false
                    },
                    arguments: [
                        {
                            type: 'Identifier',
                            name: 'foo'
                        }
                    ]
                }
            }, {
                type: 'VariableDeclaration',
                declarations: [ {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'name'
                    }
                } ],
                kind: 'let'
            }, {
                type: 'ObjectExpression',
                properties: [
                    {
                        type: 'Property',
                        key: {
                            name: 'name',
                            type: 'Identifier'
                        },
                        value: {
                            type: 'Literal',
                            value: 'bar'
                        }
                    }
                ]
            })).to.eql({
                type: 'ForInStatement',
                body: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'CallExpression',
                        callee: {
                            type: 'MemberExpression',
                            object: {
                                type: 'Identifier',
                                name: 'console'
                            },
                            property: {
                                type: 'Identifier',
                                name: 'log'
                            },
                            computed: false
                        },
                        arguments: [
                            {
                                type: 'Identifier',
                                name: 'foo'
                            }
                        ]
                    }
                },
                left: {
                    type: 'VariableDeclaration',
                    declarations: [ {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'name'
                        }
                    } ],
                    kind: 'let'
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [
                        {
                            type: 'Property',
                            key: {
                                name: 'name',
                                type: 'Identifier'
                            },
                            value: {
                                type: 'Literal',
                                value: 'bar'
                            }
                        }
                    ]
                }
            });
        });

        it('FunctionDeclaration', () => {

            expect(forast.nodes.FunctionDeclaration({
                type: 'Identifier',
                name: 'foo'
            })).to.eql({
                type: 'FunctionDeclaration',
                id: {
                    type: 'Identifier',
                    name: 'foo'
                }
            });
        });

        it('FunctionExpression', () => {

            expect(forast.nodes.FunctionExpression()).to.eql({
                type: 'FunctionExpression'
            });
        });

        it('LogicalExpression', () => {

            expect(forast.nodes.LogicalExpression('&&', {
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'Identifier',
                name: 'bar'
            })).to.eql({
                type: 'LogicalExpression',
                operator: '&&',
                left: {
                    type: 'Identifier',
                    name: 'foo'
                },
                right: {
                    type: 'Identifier',
                    name: 'bar'
                },
            });
        });

        it('ConditionalExpression', () => {

            expect(forast.nodes.ConditionalExpression({
                type: 'Identifier',
                name: 'foo'
            }, {
                type: 'ExpressionStatement',
                expression: {
                    type: 'Literal',
                    value: true
                }
            }, {
                type: 'ExpressionStatement',
                expression: {
                    type: 'Literal',
                    value: false
                }
            })).to.eql({
                type: 'ConditionalExpression',
                test: {
                    type: 'Identifier',
                    name: 'foo'
                },
                alternate: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: true
                    }
                },
                consequent: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'Literal',
                        value: false
                    }
                }
            });
        });

        it('Ternary', () => {

            expect(forast.trees.expressions.Ternary(forast.nodes.Identifier('foo'), true, false)).to.eql({
                type: 'ExpressionStatement',
                expression: {
                    type: 'ConditionalExpression',
                    test: {
                        type: 'Identifier',
                        name: 'foo',
                        computed: false
                    },
                    alternate: {
                        type: 'Literal',
                        value: true
                    },
                    consequent: {
                        type: 'Literal',
                        value: false
                    }
                }
            });
        });

    });
});
