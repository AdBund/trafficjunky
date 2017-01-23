import {expect} from 'chai';
import TJ from '../src';

let {apiKey} = process.env;

describe('TrafficJunky Member', () => {

  it('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let tj = new TJ(apiKey);

  it('should initialize successfully', ()=> {
    expect(tj.member).to.be.an('object');
  })

  describe('functional', () => {
    it('should be able to get member info', (done) => {
      tj.member.getInfo().then((data) => {
        done();
      })
    })

    it('should be able to get member fund modifications', (done) => {
      tj.member.getFundModifications().then((data) => {
        done();
      })
    })
  })

})
