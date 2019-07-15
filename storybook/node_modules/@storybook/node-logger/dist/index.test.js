"use strict";

var _npmlog = require("npmlog");

var _ = require(".");

jest.mock('npmlog', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
}));
describe('node-logger', () => {
  it('should have an info method', () => {
    const message = 'information';

    _.logger.info(message);

    expect(_npmlog.info).toHaveBeenCalledWith('', message);
  });
  it('should have a warn method', () => {
    const message = 'warning message';

    _.logger.warn(message);

    expect(_npmlog.warn).toHaveBeenCalledWith('', message);
  });
  it('should have an error method', () => {
    const message = 'error message';

    _.logger.error(message);

    expect(_npmlog.error).toHaveBeenCalledWith('', message);
  });
});