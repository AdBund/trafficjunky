import Ad from './lib/ad';
import Bid from './lib/bid';
import Campaign from './lib/campaign';
import Member from './lib/member';
import Spot from './lib/spot';


export default class TrafficJunky {
  constructor(apiKey) {
    this.ad = new Ad(apiKey);
    this.bid = new Bid(apiKey);
    this.campaign = new Campaign(apiKey);
    this.member = new Member(apiKey);
    this.spot = new Spot(apiKey);
  }
}
