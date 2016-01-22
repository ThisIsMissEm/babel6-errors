'use strict';

var _testMultiExports = require('./test-multi-exports');

var _testMultiExports2 = _interopRequireDefault(_testMultiExports);

var _testObjectExports = require('./test-object-exports');

var _testObjectExports2 = _interopRequireDefault(_testObjectExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('testMulti');
(0, _testMultiExports2.default)();

console.log('testObject');
(0, _testObjectExports2.default)();