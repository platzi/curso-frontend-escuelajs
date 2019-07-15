"use strict";

var _pathToId = _interopRequireDefault(require("./pathToId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('pathToId', function () {
  describe('pathToId', function () {
    it('errors on invalid path', function () {
      expect(function () {
        return (0, _pathToId["default"])('/something/random');
      }).toThrow(/Invalid/);
    });
    it('errors empty path', function () {
      expect(function () {
        return (0, _pathToId["default"])(null);
      }).toThrow(/Invalid/);
    });
    it('succeeds on a valid path', function () {
      expect((0, _pathToId["default"])('/story/some--id')).toBe('some--id');
    });
  });
});