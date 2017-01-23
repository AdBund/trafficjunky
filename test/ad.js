import {expect} from 'chai';
import TJ from '../src';

let {apiKey} = process.env;

describe('TrafficJunky Ad', () => {

  it ('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let tj = new TJ(apiKey);

  it ('should initialize successfully', ()=> {
    expect(tj.ad).to.be.an('object');
  })

  describe('functional', () => {

  })

})
