import { scorecardPlugin } from './plugin';

describe('scorecard', () => {
  it('should export plugin', () => {
    expect(scorecardPlugin).toBeDefined();
  });
});
