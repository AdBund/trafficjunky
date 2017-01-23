import Base from './base';

export default class Member extends Base {

  getInfo() {
    return this.request({
      path: `/api/member.json`
    });
  }

  getFundModifications(options) {
    return this.request({
      path: `/api/member/fund/modifications`,
      query: options
    });
  }
}
