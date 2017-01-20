'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _campaign = require('./lib/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = 'http://api.trafficjunky.com';

var TrafficJunky = function TrafficJunky(apiKey) {
  _classCallCheck(this, TrafficJunky);

  this.campaign = new _campaign2.default(apiKey, baseUrl);
};

exports.default = TrafficJunky;