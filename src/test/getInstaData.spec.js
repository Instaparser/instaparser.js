import mockery from 'mockery';
import sinon from 'sinon';
import { expect } from 'chai';
import { mockHTML } from '../../test/resultMock';

describe('dingleGetIndexFromS3', () => {
  let axiosMock;
  let result;

  before(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true,
    });
  });

  after(() => {
    mockery.disable();
  });

  beforeEach(() => {
    mockery.resetCache();
  });

  describe('getTopPosts', () => {
    beforeEach(() => {
      axiosMock = {
        get: sinon.stub().returns(Promise.resolve({ data: mockHTML })),
      };
      mockery.registerMock('axios', axiosMock);
      const getTopPosts = require('../getInstaData').default.getTopPosts;
      result = getTopPosts();
    });

    it('should call axios', () => { // TODO: it should do JSON.parse correctly.
      expect(axiosMock.get.calledOnce).to.eql(true);
    });
  });

  describe('getRecentPosts', () => {
    beforeEach(() => {
      axiosMock = {
        get: sinon.stub().returns(Promise.resolve({ data: mockHTML })),
      };
      mockery.registerMock('axios', axiosMock);
      const getRecentPosts = require('../getInstaData').default.getRecentPosts;
      result = getRecentPosts();
    });

    it('should call axios', () => { // TODO: it should do JSON.parse correctly.
      expect(axiosMock.get.calledOnce).to.eql(true);
    });
  });
});
