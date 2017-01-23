import request from '../utils/request';
import Base from './base';

export default class Ad extends Base {
  getById(adId) {
    this.request({
      path: '/api/ads/${adId}/one.json'
    })
  }

  getByCampaignId(campaignId) {
    this.request({
      path: '/api/ads/${campaignId}.json'
    })
  }

  getStatsByCampaignId(campaignId) {
    this.request({
      path: '/api/ads/${campaignId}/stats/one.json'
    })
  }
}
