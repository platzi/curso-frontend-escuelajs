"use strict";

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.search");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.mapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _memoizerific = _interopRequireDefault(require("memoizerific"));

var _components = require("@storybook/components");

var _api = require("@storybook/api");

var _shortcut = require("../libs/shortcut");

var _ListItemIcon = _interopRequireDefault(require("../components/sidebar/ListItemIcon"));

var _Sidebar = _interopRequireDefault(require("../components/sidebar/Sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var focusableUIElements = {
  storySearchField: 'storybook-explorer-searchfield',
  storyListMenu: 'storybook-explorer-menu',
  storyPanelRoot: 'storybook-panel-root'
};

var _ref =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], {
  icon: "check"
});

var _ref2 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref3 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], {
  icon: "check"
});

var _ref4 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref5 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref6 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref7 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref8 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref9 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref10 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref11 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref12 =
/*#__PURE__*/
_react["default"].createElement(_components.Badge, {
  status: "positive"
}, "Update");

var _ref13 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var _ref14 =
/*#__PURE__*/
_react["default"].createElement(_ListItemIcon["default"], null);

var createMenu = (0, _memoizerific["default"])(1)(function (api, shortcutKeys, isFullscreen, showPanel, showNav) {
  return [{
    id: 'S',
    title: 'Show sidebar',
    onClick: function onClick() {
      return api.toggleNav();
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.toggleNav),
    left: showNav ? _ref : _ref2
  }, {
    id: 'A',
    title: 'Show addons',
    onClick: function onClick() {
      return api.togglePanel();
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.togglePanel),
    left: showPanel ? _ref3 : _ref4
  }, {
    id: 'D',
    title: 'Change addons orientation',
    onClick: function onClick() {
      return api.togglePanelPosition();
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.panelPosition),
    left: _ref5
  }, {
    id: 'F',
    title: 'Go full screen',
    onClick: api.toggleFullscreen,
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.fullScreen),
    left: isFullscreen ? 'check' : _ref6
  }, {
    id: '/',
    title: 'Search',
    onClick: function onClick() {
      return api.focusOnUIElement(focusableUIElements.storySearchField);
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.search),
    left: _ref7
  }, {
    id: 'up',
    title: 'Previous component',
    onClick: function onClick() {
      return api.jumpToComponent(-1);
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.prevComponent),
    left: _ref8
  }, {
    id: 'down',
    title: 'Next component',
    onClick: function onClick() {
      return api.jumpToComponent(1);
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.nextComponent),
    left: _ref9
  }, {
    id: 'prev',
    title: 'Previous story',
    onClick: function onClick() {
      return api.jumpToStory(-1);
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.prevStory),
    left: _ref10
  }, {
    id: 'next',
    title: 'Next story',
    onClick: function onClick() {
      return api.jumpToStory(1);
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.nextStory),
    left: _ref11
  }, {
    id: 'about',
    title: 'About your Storybook',
    onClick: function onClick() {
      return api.navigate('/settings/about');
    },
    right: api.versionUpdateAvailable() && _ref12,
    left: _ref13
  }, {
    id: 'shortcuts',
    title: 'Keyboard shortcuts',
    onClick: function onClick() {
      return api.navigate('/settings/shortcuts');
    },
    right: (0, _shortcut.shortcutToHumanString)(shortcutKeys.shortcutsPage),
    left: _ref14
  }];
});

var mapper = function mapper(_ref15) {
  var state = _ref15.state,
      api = _ref15.api;
  var _state$ui = state.ui,
      name = _state$ui.name,
      url = _state$ui.url,
      viewMode = state.viewMode,
      storyId = state.storyId,
      _state$layout = state.layout,
      isFullscreen = _state$layout.isFullscreen,
      showPanel = _state$layout.showPanel,
      showNav = _state$layout.showNav,
      panelPosition = _state$layout.panelPosition,
      storiesHash = state.storiesHash,
      storiesConfigured = state.storiesConfigured;
  var shortcutKeys = api.getShortcutKeys();
  return {
    loading: !storiesConfigured,
    title: name,
    url: url,
    stories: storiesHash,
    storyId: storyId,
    viewMode: viewMode,
    menu: createMenu(api, shortcutKeys, isFullscreen, showPanel, showNav, panelPosition),
    menuHighlighted: api.versionUpdateAvailable()
  };
};

exports.mapper = mapper;

var _default = function _default(props) {
  return _react["default"].createElement(_api.Consumer, {
    filter: mapper
  }, function (fromState) {
    return _react["default"].createElement(_Sidebar["default"], _extends({}, props, fromState));
  });
};

exports["default"] = _default;