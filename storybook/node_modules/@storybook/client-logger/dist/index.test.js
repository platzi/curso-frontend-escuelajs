"use strict";

require("core-js/modules/es.object.assign");

var _ = require(".");

describe('client-logger', function () {
  var initialConsole = Object.assign({}, global.console);
  beforeEach(function () {
    global.console.debug = jest.fn();
    global.console.log = jest.fn();
    global.console.info = jest.fn();
    global.console.warn = jest.fn();
    global.console.error = jest.fn();
  });
  afterAll(function () {
    global.console = initialConsole;
  });
  it('should have an debug method that displays the message in red, with a trace', function () {
    var message = 'debug message';

    _.logger.debug(message);

    expect(global.console.debug).toHaveBeenCalledWith(message);
  });
  it('should have an log method that displays the message in red, with a trace', function () {
    var message = 'log message';

    _.logger.log(message);

    expect(global.console.log).toHaveBeenCalledWith(message);
  });
  it('should have an info method that displays the message', function () {
    var message = 'information';

    _.logger.info(message);

    expect(global.console.info).toHaveBeenCalledWith(message);
  });
  it('should have a warning method that displays the message in yellow, with a trace', function () {
    var message = 'warning message';

    _.logger.warn(message);

    expect(global.console.warn).toHaveBeenCalledWith(message);
  });
  it('should have an error method that displays the message in red, with a trace', function () {
    var message = 'error message';

    _.logger.error(message);

    expect(global.console.error).toHaveBeenCalledWith(message);
  });
});