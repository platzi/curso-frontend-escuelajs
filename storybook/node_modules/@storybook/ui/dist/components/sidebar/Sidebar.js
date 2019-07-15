"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

var _SidebarHeading = _interopRequireDefault(require("./SidebarHeading"));

var _SidebarStories = _interopRequireDefault(require("./SidebarStories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Heading = (0, _theming.styled)(_SidebarHeading["default"])({
  padding: '20px 20px 12px'
});
var Stories = (0, _theming.styled)(_SidebarStories["default"])(function (_ref) {
  var loading = _ref.loading;
  return loading ? {
    marginTop: 8
  } : {};
});

var Container = _theming.styled.nav({
  position: 'absolute',
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%'
});

var CustomScrollArea = (0, _theming.styled)(_components.ScrollArea)({
  '.simplebar-track.simplebar-vertical': {
    right: '4px'
  }
});

var Sidebar = function Sidebar(_ref2) {
  var storyId = _ref2.storyId,
      stories = _ref2.stories,
      menu = _ref2.menu,
      menuHighlighted = _ref2.menuHighlighted,
      loading = _ref2.loading;
  return _react["default"].createElement(Container, {
    className: "container sidebar-container"
  }, _react["default"].createElement(CustomScrollArea, {
    vertical: true
  }, _react["default"].createElement(Heading, {
    className: "sidebar-header",
    menuHighlighted: menuHighlighted,
    menu: menu
  }), _react["default"].createElement(Stories, {
    stories: stories,
    storyId: storyId,
    loading: loading
  })));
};

Sidebar.displayName = "Sidebar";
Sidebar.propTypes = {
  stories: _propTypes["default"].shape({}).isRequired,
  storyId: _propTypes["default"].string,
  menu: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired,
  menuHighlighted: _propTypes["default"].bool,
  loading: _propTypes["default"].bool
};
Sidebar.defaultProps = {
  storyId: undefined,
  menuHighlighted: false,
  loading: false
};
Sidebar.displayName = 'Sidebar';
var _default = Sidebar;
exports["default"] = _default;