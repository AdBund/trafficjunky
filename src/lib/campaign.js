import Base from './base';

export default class Campaign extends Base {

  getAll(options) {
    return this.request({
      path: '/api/campaigns.json',
      query: options
    });
  }

  getById(id) {
    return this.request({
      path: `/api/campaigns/${id}.json`
    });
  }

  getStatsById(id, options = {}) {
    options.campaignId = id;
    return this.request({
      path: '/api/campaigns/stats.json',
      query: options
    });
  }

  getBidsStats(options) {
    return this.request({
      path: '/api/campaigns/bids/stats.json',
      query: options
    });
  }

  getTimeTargetsById(id) {
    return this.request({
      path: `/api/campaigns/${id}/timetargets.json`
    });
  }
}
