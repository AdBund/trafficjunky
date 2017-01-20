'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Campaign = function () {
  function Campaign(apiKey, baseUrl) {
    _classCallCheck(this, Campaign);

    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  _createClass(Campaign, [{
    key: 'getAll',
    value: function getAll() {
      var path = '/api/campaigns.json';
      var url = '' + this.baseUrl + path;
      var p = _request2.default.get(url).query({ api_key: this.apiKey }).end();
      return p.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getById',
    value: function getById(id) {
      var url = this.baseUrl + '/api/campaigns/' + id + '.json';
      var p = _request2.default.get(url).query({ api_key: this.apiKey }).end();
      return p.then(function (res) {
        return res.body;
      });
    }
  }]);

  return Campaign;
}();

exports.default = Campaign;