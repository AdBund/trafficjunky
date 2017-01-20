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
    it ('should be able to get all campaigns', (done)=> {
      tj.campaign.getAll().then((campaigns)=> {
        expect(campaigns).to.be.a('array');
        done()
      })
    })

    it ('should be able to get a campaign by its id', (done)=> {
      tj.campaign.getAll().then((campaigns) => {
        if(campaigns.length > 0) {
          let _campaign = campaigns[0];
          tj.campaign.getById(_campaign.campaign_id).then((campaign)=> {
            expect(_campaign.campaign_id).to.equal(campaign.campaign_id);
            done();
          })
        } else {
          done();
        }
      })
    })
  })

})
