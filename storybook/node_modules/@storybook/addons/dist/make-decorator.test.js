"use strict";

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultDecorateStory = void 0;

var _utilDeprecate = _interopRequireDefault(require("util-deprecate"));

var _makeDecorator = require("./make-decorator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultDecorateStory = function defaultDecorateStory(getStory, decorators) {
  return decorators.reduce(function (decorated, decorator) {
    return function (context) {
      return decorator(function () {
        return decorated(context);
      }, context);
    };
  }, getStory);
};

exports.defaultDecorateStory = defaultDecorateStory;
jest.mock('util-deprecate', function () {
  return jest.fn(function (fn) {
    return jest.fn(function () {
      return fn.apply(void 0, arguments);
    });
  });
});
var baseContext = {
  name: '',
  kind: '',
  parameters: {}
};
describe('makeDecorator', function () {
  it('returns a decorator that passes parameters on the parameters argument', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test'
    });
    var story = jest.fn();
    var decoratedStory = defaultDecorateStory(story, [decorator]);
    var context = {
      kind: '',
      name: '',
      parameters: {
        test: 'test-val'
      }
    };
    decoratedStory(context);
    expect(wrapper).toHaveBeenCalledWith(expect.any(Function), context, {
      parameters: 'test-val'
    });
  });
  it('passes options added at decoration time', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test'
    });
    var story = jest.fn();
    var options = 'test-val';
    var decoratedStory = defaultDecorateStory(story, [decorator(options)]);
    var context = Object.assign({}, baseContext);
    decoratedStory(context);
    expect(wrapper).toHaveBeenCalledWith(expect.any(Function), context, {
      options: 'test-val'
    });
  });
  it('passes both options *and* parameters at the same time', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test'
    });
    var story = jest.fn();
    var options = 'test-val';
    var decoratedStory = defaultDecorateStory(story, [decorator(options)]);
    var context = Object.assign({}, baseContext, {
      parameters: {
        test: 'test-val'
      }
    });
    decoratedStory(context);
    expect(wrapper).toHaveBeenCalledWith(expect.any(Function), context, {
      options: 'test-val',
      parameters: 'test-val'
    });
  });
  it('passes nothing if neither are supplied', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test'
    });
    var story = jest.fn();
    var decoratedStory = defaultDecorateStory(story, [decorator]);
    var context = Object.assign({}, baseContext);
    decoratedStory(context);
    expect(wrapper).toHaveBeenCalledWith(expect.any(Function), context, {});
  });
  it('calls the story directly if neither options or parameters are supplied and skipIfNoParametersOrOptions is true', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test',
      skipIfNoParametersOrOptions: true
    });
    var story = jest.fn();
    var decoratedStory = defaultDecorateStory(story, [decorator]);
    var context = Object.assign({}, baseContext);
    decoratedStory(context);
    expect(wrapper).not.toHaveBeenCalled();
    expect(story).toHaveBeenCalled();
  });
  it('calls the story directly if the disable parameter is passed to the decorator', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test',
      skipIfNoParametersOrOptions: true
    });
    var story = jest.fn();
    var decoratedStory = defaultDecorateStory(story, [decorator]);
    var context = Object.assign({}, baseContext, {
      parameters: {
        test: {
          disable: true
        }
      }
    });
    decoratedStory(context);
    expect(wrapper).not.toHaveBeenCalled();
    expect(story).toHaveBeenCalled();
  });
  it('passes options added at story time, but with a deprecation warning, if allowed', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test',
      allowDeprecatedUsage: true
    });
    var options = 'test-val';
    var story = jest.fn();
    var decoratedStory = decorator(options)(story);
    expect(_utilDeprecate["default"]).toHaveBeenCalledTimes(1);
    expect(_utilDeprecate["default"].mock.calls[0]).toEqual([expect.any(Function), expect.stringContaining("instead use addDecorator(test) and pass options with the 'test' parameter")]);
    var context = Object.assign({}, baseContext);
    decoratedStory(context);
    expect(wrapper).toHaveBeenCalledWith(expect.any(Function), context, {
      options: 'test-val'
    });
  });
  it('throws if options are added at storytime, if not allowed', function () {
    var wrapper = jest.fn();
    var decorator = (0, _makeDecorator.makeDecorator)({
      wrapper: wrapper,
      name: 'test',
      parameterName: 'test',
      allowDeprecatedUsage: false
    });
    var options = 'test-val';
    var story = jest.fn();
    expect(function () {
      return decorator(options)(story);
    }).toThrow(/not allowed/);
  });
});