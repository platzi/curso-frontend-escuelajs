"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactTestingLibrary = require("react-testing-library");

var _theming = require("@storybook/theming");

var _shortcuts = _interopRequireDefault(require("./shortcuts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// A limited set of keys we use in this test file
var shortcutKeys = {
  fullScreen: ['F'],
  togglePanel: ['A'],
  toggleNav: ['S'],
  toolbar: ['T'],
  search: ['/'],
  focusNav: ['1'],
  focusIframe: ['2']
};

var makeActions = function makeActions() {
  return {
    setShortcut: jest.fn(),
    restoreDefaultShortcut: jest.fn().mockImplementation(function (action) {
      return shortcutKeys[action];
    }),
    restoreAllDefaultShortcuts: jest.fn().mockReturnValue(shortcutKeys),
    onClose: jest.fn()
  };
};

describe('ShortcutsScreen', function () {
  it('renders correctly', function () {
    var comp = (0, _enzyme.shallow)(_react["default"].createElement(_theming.ThemeProvider, {
      theme: (0, _theming.convert)(_theming.themes.light)
    }, _react["default"].createElement(_shortcuts["default"], _extends({
      shortcutKeys: shortcutKeys
    }, makeActions()))));
    expect(comp).toExist();
  });
  it('handles a full mount', function () {
    var comp = (0, _reactTestingLibrary.render)(_react["default"].createElement(_theming.ThemeProvider, {
      theme: (0, _theming.convert)(_theming.themes.light)
    }, _react["default"].createElement(_shortcuts["default"], _extends({
      shortcutKeys: shortcutKeys
    }, makeActions()))));
    expect(comp).toBeDefined();
    comp.unmount();
  });
  describe('onFocus', function () {
    it('calls setstate and clears the input on focus', function () {
      var comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
        shortcutKeys: shortcutKeys
      }, makeActions())));
      var instance = comp.instance();
      instance.onFocus('toolbar')();
      expect(comp.state('shortcutKeys').toolbar.shortcut).toBeNull();
      expect(comp.state('activeFeature')).toBe('toolbar');
    });
  });
  describe('onKeyDown', function () {
    it('does nothing if a modifier key is pressed', function () {
      var actions = makeActions();
      var comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
        shortcutKeys: shortcutKeys
      }, actions)));
      var instance = comp.instance();
      instance.onFocus('focusIframe')();
      instance.onKeyDown({
        isShift: true,
        key: 'Shift'
      });
      expect(actions.setShortcut).not.toHaveBeenCalled();
      expect(comp.state('shortcutKeys').focusIframe.shortcut).toBeNull();
    });
    it('changes the shortcut in state if a key is pressed', function () {
      var actions = makeActions();
      var comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
        shortcutKeys: shortcutKeys
      }, actions)));
      var instance = comp.instance();
      instance.onFocus('focusIframe')();
      instance.onKeyDown({
        key: 'P'
      });
      expect(actions.setShortcut).not.toHaveBeenCalled();
      expect(comp.state('shortcutKeys').focusIframe.shortcut).toEqual(['P']);
      expect(comp.state('shortcutKeys').focusIframe.error).toBe(false);
    });
    it('sets an error and the shortcut in state if a duplicate key is pressed', function () {
      var actions = makeActions();
      var comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
        shortcutKeys: shortcutKeys
      }, actions)));
      var instance = comp.instance();
      instance.onFocus('focusIframe')();
      instance.onKeyDown({
        key: 'F'
      });
      expect(actions.setShortcut).not.toHaveBeenCalled();
      expect(comp.state('shortcutKeys').focusIframe.shortcut).toEqual(['F']);
      expect(comp.state('shortcutKeys').focusIframe.error).toBe(true);
    });
  });
  describe('onBlur', function () {
    it('if the input is empty, restores the respective default',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var actions, comp, instance;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              actions = makeActions();
              comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
                shortcutKeys: shortcutKeys
              }, actions)));
              instance = comp.instance();
              instance.onFocus('focusIframe')();
              _context.next = 6;
              return instance.onBlur();

            case 6:
              expect(actions.setShortcut).not.toHaveBeenCalled();
              expect(actions.restoreDefaultShortcut).toHaveBeenCalledWith('focusIframe');
              expect(comp.state('shortcutKeys').focusIframe.shortcut).toEqual(['2']);
              expect(comp.state('shortcutKeys').focusIframe.error).toBe(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('if the shortcut is errored, restores the respective default',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var actions, comp, instance;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              actions = makeActions();
              comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
                shortcutKeys: shortcutKeys
              }, actions)));
              instance = comp.instance();
              instance.onFocus('focusIframe')();
              instance.onKeyDown({
                key: 'F'
              });
              _context2.next = 7;
              return instance.onBlur();

            case 7:
              expect(actions.setShortcut).not.toHaveBeenCalled();
              expect(actions.restoreDefaultShortcut).toHaveBeenCalledWith('focusIframe');
              expect(comp.state('shortcutKeys').focusIframe.shortcut).toEqual(['2']);
              expect(comp.state('shortcutKeys').focusIframe.error).toBe(false);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('it saves the shortcut if it is valid', function () {
      var actions = makeActions();
      var comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
        shortcutKeys: shortcutKeys
      }, actions)));
      var instance = comp.instance();
      instance.onFocus('focusIframe')();
      instance.onKeyDown({
        key: 'P'
      });
      instance.onBlur();
      expect(actions.setShortcut).toHaveBeenCalledWith('focusIframe', ['P']);
      expect(comp.state('shortcutKeys').focusIframe.shortcut).toEqual(['P']);
      expect(comp.state('shortcutKeys').focusIframe.error).toBe(false);
    });
  });
  describe('restoreDefaults', function () {
    it('if the input is empty, restores the respective default',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var actions, comp, instance;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              actions = makeActions();
              comp = (0, _enzyme.shallow)(_react["default"].createElement(_shortcuts["default"], _extends({
                shortcutKeys: shortcutKeys
              }, actions)));
              instance = comp.instance();
              instance.onFocus('focusIframe')();
              instance.onKeyDown({
                key: 'P'
              });
              _context3.next = 7;
              return comp.find('#restoreDefaultsHotkeys').simulate('click');

            case 7:
              expect(comp.state('shortcutKeys').focusIframe.shortcut).toEqual(['2']);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
});