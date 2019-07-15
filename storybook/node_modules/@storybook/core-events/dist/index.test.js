"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

var EventsPackageExport = _interopRequireWildcard(require("."));

var _index = _interopRequireWildcard(require("./index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/* eslint-disable import/no-duplicates */
describe('Core Events', function () {
  it('Should export the module as a namespace', function () {
    expect(EventsPackageExport.CHANNEL_CREATED).toBe('channelCreated');
  });
  it('Should export all values in the default export', function () {
    expect(_index["default"].CHANNEL_CREATED).toBe('channelCreated');
  });
  it('Should export values as named exports', function () {
    expect(_index.CHANNEL_CREATED).toBe('channelCreated');
  });
});