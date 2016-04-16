var should = require('should');
var cleanFunc = require('../index');
var code = 'function a(){console.log(1);}function b(){window.console.log(2);}';

describe('console-clean-loader', function() {
    it('should clean all the log code', function() {
        (cleanFunc(code)).should.be.equal('function a(){}function b(){}');
    });
});
