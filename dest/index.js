'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ad = require('./lib/ad');

var _ad2 = _interopRequireDefault(_ad);

var _bid = require('./lib/bid');

var _bid2 = _interopRequireDefault(_bid);

var _campaign = require('./lib/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _member = require('./lib/member');

var _member2 = _interopRequireDefault(_member);

var _spot = require('./lib/spot');

var _spot2 = _interopRequireDefault(_spot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrafficJunky = function TrafficJunky(apiKey) {
  _classCallCheck(this, TrafficJunky);

  this.ad = new _ad2.default(apiKey);
  this.bid = new _bid2.default(apiKey);
  this.campaign = new _campaign2.default(apiKey);
  this.member = new _member2.default(apiKey);
  this.spot = new _spot2.default(apiKey);
};

exports.default = TrafficJunky;