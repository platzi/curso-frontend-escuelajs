"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.freeze");

var _commonTags = require("common-tags");

var _formatter = require("./formatter");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    console.log(\"hello\");\n    console.log(\"world\");\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

test('handles empty string', function () {
  var input = '';
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe(input);
});
test('handles single line', function () {
  var input = 'console.log("hello world")';
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe(input);
});
test('does not transform correct code', function () {
  var input = (0, _commonTags.stripIndents)(_templateObject());
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe(input);
});
test('does transform incorrect code', function () {
  var input = "\n    console.log(\"hello\");\n    console.log(\"world\");\n  ";
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe("console.log(\"hello\");\nconsole.log(\"world\");");
});
test('more indentations - skip first line', function () {
  var input = "\n    test('handles empty string', () => {\n      const input = '';\n      const result = formatter(input);\n    \n      expect(result).toBe(input);\n    });\n  ";
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe("test('handles empty string', () => {\n  const input = '';\n  const result = formatter(input);\n\n  expect(result).toBe(input);\n});");
});
test('more indentations - code on first line', function () {
  var input = "// some comment\n    test('handles empty string', () => {\n      const input = '';\n      const result = formatter(input);\n    \n      expect(result).toBe(input);\n    });\n  ";
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe("// some comment\ntest('handles empty string', () => {\n  const input = '';\n  const result = formatter(input);\n\n  expect(result).toBe(input);\n});");
});
test('removes whitespace in empty line completely', function () {
  var input = "\n    console.log(\"hello\");\n\n    console.log(\"world\");\n  ";
  var result = (0, _formatter.formatter)(input);
  expect(result).toBe("console.log(\"hello\");\n\nconsole.log(\"world\");");
});