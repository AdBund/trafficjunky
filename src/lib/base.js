import request from '../utils/request';

export default class Base {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'http://api.trafficjunky.com';
  }

  request(options) {
    let {method = 'get', query = {}, body = {}, path} = options;
    query.api_key = this.apiKey;
    let promise = request[method](`${this.baseUrl}${path}`)
                         .query(query)
                         .send(body)
                         .end();
    return promise.then((res) => {
      return res.body;
    });
  }
}
