var sinon 		= require ('sinon');
var assert 		= require ('assert');
var log 		= require ('../index.js');

describe ("All methods", function () {
	it ("Provides all logging methods", function () {
		assert.equal (typeof log.debug, "function");
		assert.equal (typeof log.info, "function");
		assert.equal (typeof log.error, "function");
		assert.equal (typeof log.none, "function");
	});
    it ("Also provides setLogLevel method", function () {
        assert.equal(typeof log.setLogLevel, 'function');
    });
    it ('Shows no logs if loglevel is set to none', function () {
        log.setLogLevel('none');
        var spy = sinon.spy(log, 'debug');
        spy('string');
        assert(spy.returned(null));
        spy.restore();
    });
    it ('Only shows errors, if loglevel is set on errors', function () {
        log.setLogLevel('error');
        var spyError = sinon.spy(log, 'error');
        var spyInfo = sinon.spy(log, 'info');
        var spyDebug = sinon.spy(log, 'debug');
        spyError('string');
        spyInfo('string');
        spyDebug('string');

        assert(spyError.returned(true));
        assert(spyInfo.returned(null));
        assert(spyDebug.returned(null));
        spyError.restore();
        spyInfo.restore();
        spyDebug.restore();
    });
})
