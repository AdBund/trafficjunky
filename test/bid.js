import {expect} from 'chai';
import TJ from '../src';

let {apiKey} = process.env;

describe('TrafficJunky Bid', () => {

  it ('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let tj = new TJ(apiKey);

  it ('should initialize successfully', ()=> {
    expect(tj.bid).to.be.an('object');
  })

  describe('functional', () => {
    let campaignId;

    xit ('should be able to get all campaigns', (done)=> {
      tj.campaign.getAll().then((campaigns)=> {
        expect(campaigns).to.be.a('array');
        if(campaigns.length > 0) {
          campaignId = campaigns[0].campaign_id;
        }
        done()
      })
    })

    let bidId = '1022465031';

    xit('getByCampaignId', (done) => {
      if(campaignId) {
        tj.bid.getByCampaignId(campaignId).then((data) => {
          expect(data.bids).to.be.an('object');
          bidId = Object.keys(data.bids)[0];
          done();
        })
      } else {
        done();
      }
    })

    it('getById', (done) => {
      if(bidId) {
        tj.bid.getById(bidId).then((data) => {
          done();
        })
      } else {
        done();
      }
    })
  })

})
