import request from '../utils/request';

export default class Campaign {
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  getAll() {
    let path = '/api/campaigns.json';
    let url = `${this.baseUrl}${path}`;
    let p = request.get(url).query({api_key: this.apiKey}).end();
    return p.then(res => res.body);
  }

  getById(id) {
    let url = `${this.baseUrl}/api/campaigns/${id}.json`;
    let p = request.get(url).query({api_key: this.apiKey}).end();
    return p.then(res => res.body);
  }

}
