import {expect} from 'chai';
import TJ from '../src';

let {apiKey} = process.env;

describe('TrafficJunky Spot', () => {

  it ('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let tj = new TJ(apiKey);

  it ('should initialize successfully', ()=> {
    expect(tj.campaign).to.be.an('object');
    expect(tj.spot).to.be.an('object');
  })

  describe('functional', () => {
    let campaignId;

    it('should be able to get an campaign', (done) => {
      tj.campaign.getAll().then((campaigns)=> {
        expect(campaigns).to.be.a('array');
        if(campaigns.length > 0) {
          campaignId = campaigns[0].campaign_id;
        }
        done();
      })
    })

    it('should be able to get all spot ids by a campaign id', (done) => {
      if (campaignId) {
        tj.spot.getAllByCampaignId(campaignId).then((data) => {
          expect(data.spots).to.be.an('array');
          done();
        })
      } else {
        done();
      }
    })

  })

})
