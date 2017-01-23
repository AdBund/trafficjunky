'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bid = function (_Base) {
  _inherits(Bid, _Base);

  function Bid() {
    _classCallCheck(this, Bid);

    return _possibleConstructorReturn(this, (Bid.__proto__ || Object.getPrototypeOf(Bid)).apply(this, arguments));
  }

  _createClass(Bid, [{
    key: 'getById',
    value: function getById(bidId) {
      return this.request({
        path: '/api/bids/' + bidId + '/one.json'
      });
    }
  }, {
    key: 'getStatsById',
    value: function getStatsById(bidId, options) {
      return this.request({
        path: '/api/bids/' + bidId + '/stats/one.json',
        query: options
      });
    }
  }, {
    key: 'getByCampaignId',
    value: function getByCampaignId(campaignId) {
      return this.request({
        path: '/api/bids/' + campaignId + '.json'
      });
    }
  }, {
    key: 'getActiveByCampaignId',
    value: function getActiveByCampaignId(campaignId) {
      return this.request({
        path: '/api/bids/' + campaignId + '/active.json'
      });
    }
  }, {
    key: 'getCurrentBids',
    value: function getCurrentBids(options) {
      return this.request({
        path: '/api/current_bids.json',
        query: options
      });
    }
  }]);

  return Bid;
}(_base2.default);

exports.default = Bid;