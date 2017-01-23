import {expect} from 'chai';
import TJ from '../src';

let {apiKey} = process.env;

describe('TrafficJunky Campaign', () => {

  it ('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let tj = new TJ(apiKey);

  it ('should initialize successfully', ()=> {
    expect(tj.campaign).to.be.an('object');
  })

  describe('functional', () => {
    let campaignId;

    it ('should be able to get all campaigns', (done)=> {
      tj.campaign.getAll().then((campaigns)=> {
        expect(campaigns).to.be.a('array');
        if(campaigns.length > 0) {
          campaignId = campaigns[0].campaign_id;
        }
        done()
      })
    })

    it ('should be able to get a campaign by its id', (done)=> {
        if(campaignId) {
          tj.campaign.getById(campaignId).then((campaign)=> {
            expect(campaignId).to.equal(campaign.campaign_id);
            done();
        })
      } else {
        done();
      }
    })

    it ('should be able to get a campaign stats by its id', (done)=> {
      if(campaignId) {
        tj.campaign.getStatsById(campaignId).then((stat) => {
          done();
        })
      } else {
        done();
      }
    })
  })

})
