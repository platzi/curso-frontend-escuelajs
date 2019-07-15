"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _polished = require("polished");

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Heading = _theming.styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: theme.typography.weight.black,
    fontSize: theme.typography.size.s1 - 1,
    lineHeight: '24px',
    color: (0, _polished.transparentize)(0.5, theme.color.defaultText)
  };
});

var Subheading = function Subheading(props) {
  return _react["default"].createElement(Heading, props);
};

Subheading.displayName = "Subheading";
var _default = Subheading;
exports["default"] = _default;