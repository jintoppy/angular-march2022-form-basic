import { SmallNamePipe } from './small-name.pipe';

describe('SmallNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SmallNamePipe();
    expect(pipe).toBeTruthy();
  });
});
