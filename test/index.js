import {expect} from 'chai';
import TJ from '../src';

let {apiKey} = process.env;

describe('TrafficJunky', () => {

  it ('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let tj = new TJ(apiKey);

  it ('should initialize successfully', ()=> {
    expect(tj.campaign).to.be.an('object');
  })

  describe('Campaign', () => {
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
            console.log(campaign);
            done();
        })
      } else {
        done();
      }
    })

    it ('should be able to get a campaign stats by its id', (done)=> {
      if(campaignId) {
        tj.campaign.getStatsById(campaignId).then((stat) => {
          console.log(stat);
          done();
        })
      } else {
        done();
      }
    })
  })

})
