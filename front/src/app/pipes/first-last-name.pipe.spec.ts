import { FirstLastNamePipe } from './first-last-name.pipe';

describe('FirstLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
