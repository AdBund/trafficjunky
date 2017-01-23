'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request2 = require('../utils/request');

var _request3 = _interopRequireDefault(_request2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base(apiKey) {
    _classCallCheck(this, Base);

    this.apiKey = apiKey;
    this.baseUrl = 'http://api.trafficjunky.com';
  }

  _createClass(Base, [{
    key: 'request',
    value: function request(options) {
      var _options$method = options.method,
          method = _options$method === undefined ? 'get' : _options$method,
          _options$query = options.query,
          query = _options$query === undefined ? {} : _options$query,
          _options$body = options.body,
          body = _options$body === undefined ? {} : _options$body,
          path = options.path;

      query.api_key = this.apiKey;
      var promise = _request3.default[method]('' + this.baseUrl + path).query(query).send(body).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }]);

  return Base;
}();

exports.default = Base;