"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkColor = void 0;

var mkColor = function mkColor(color) {
  return {
    color: color
  };
};

exports.mkColor = mkColor;