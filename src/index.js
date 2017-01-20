import Campaign from './lib/campaign';

const baseUrl = 'http://api.trafficjunky.com';

export default class TrafficJunky {
  constructor(apiKey) {
    this.campaign = new Campaign(apiKey, baseUrl);
  }
}
