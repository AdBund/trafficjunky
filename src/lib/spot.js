import request from '../utils/request';
import Base from './base';

export default class Spot extends Base {

  getAllByCampaignId(campaignId) {
    return this.request({
      path: `/api/spots/${campaignId}.json`
    })
  }

}
