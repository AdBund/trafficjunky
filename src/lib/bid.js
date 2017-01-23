import request from '../utils/request';
import Base from './base';

export default class Bid extends Base {
  getById(bidId) {
    return this.request({
      path: `/api/bids/${bidId}/one.json`
    });
  }

  getStatsById(bidId, options) {
    return this.request({
      path: `/api/bids/${bidId}/stats/one.json`,
      query: options
    });
  }

  getByCampaignId(campaignId) {
    return this.request({
      path: `/api/bids/${campaignId}.json`,
    })
  }

  getActiveByCampaignId(campaignId) {
    return this.request({
      path: `/api/bids/${campaignId}/active.json`
    })
  }

  getCurrentBids(options) {
    return this.request({
      path: `/api/current_bids.json`,
      query: options
    })
  }
}
