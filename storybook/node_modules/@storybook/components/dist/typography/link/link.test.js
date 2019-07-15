"use strict";

require("core-js/modules/es.object.assign");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _link = require("./link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LEFT_BUTTON = 0;
var MIDDLE_BUTTON = 1;
var RIGHT_BUTTON = 2;

var createEvent = function createEvent(options) {
  return Object.assign({
    button: LEFT_BUTTON,
    preventDefault: jest.fn()
  }, options);
};

var renderLink = function renderLink(props) {
  return (0, _enzyme.shallow)(_react["default"].createElement(_link.Link, Object.assign({
    children: 'Content'
  }, props)));
};

var setup = function setup(_ref) {
  var props = _ref.props,
      event = _ref.event;
  return {
    e: createEvent(event),
    result: renderLink(props),
    onClick: props.onClick || jest.fn()
  };
};

describe('Link', function () {
  describe('events', function () {
    it('should call onClick on a plain left click', function () {
      var _setup = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          button: LEFT_BUTTON
        }
      }),
          result = _setup.result,
          onClick = _setup.onClick,
          e = _setup.e;

      result.simulate('click', e);
      expect(onClick).toHaveBeenCalledWith(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
    it("shouldn't call onClick on a middle click", function () {
      var _setup2 = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          button: MIDDLE_BUTTON
        }
      }),
          result = _setup2.result,
          onClick = _setup2.onClick,
          e = _setup2.e;

      result.simulate('click', e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).not.toHaveBeenCalled();
    });
    it("shouldn't call onClick on a right click", function () {
      var _setup3 = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          button: RIGHT_BUTTON
        }
      }),
          result = _setup3.result,
          onClick = _setup3.onClick,
          e = _setup3.e;

      result.simulate('click', e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).not.toHaveBeenCalled();
    });
    it("shouldn't call onClick on alt+click", function () {
      var _setup4 = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          altKey: true
        }
      }),
          result = _setup4.result,
          onClick = _setup4.onClick,
          e = _setup4.e;

      result.simulate('click', e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).not.toHaveBeenCalled();
    });
    it("shouldn't call onClick on ctrl+click", function () {
      var _setup5 = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          ctrlKey: true
        }
      }),
          result = _setup5.result,
          onClick = _setup5.onClick,
          e = _setup5.e;

      result.simulate('click', e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).not.toHaveBeenCalled();
    });
    it("shouldn't call onClick on cmd+click / win+click", function () {
      var _setup6 = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          metaKey: true
        }
      }),
          result = _setup6.result,
          onClick = _setup6.onClick,
          e = _setup6.e;

      result.simulate('click', e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).not.toHaveBeenCalled();
    });
    it("shouldn't call onClick on shift+click", function () {
      var _setup7 = setup({
        props: {
          onClick: jest.fn()
        },
        event: {
          shiftKey: true
        }
      }),
          result = _setup7.result,
          onClick = _setup7.onClick,
          e = _setup7.e;

      result.simulate('click', e);
      expect(onClick).not.toHaveBeenCalled();
      expect(e.preventDefault).not.toHaveBeenCalled();
    });
  });
});