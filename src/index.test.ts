import {
  enableScrollLock,
  disableScrollLock,
  isScrollLockEnabled,
  getScrollbarWidth,
} from './';

describe('bodyScrollLock', () => {
  test('enable is a function', () => {
    expect(typeof enableScrollLock).toBe('function');
  });

  test('disable is a function', () => {
    expect(typeof disableScrollLock).toBe('function');
  });

  test('isEnabled is a function', () => {
    expect(typeof isScrollLockEnabled).toBe('function');
  });

  test('getScrollbarWidth is a function', () => {
    expect(typeof getScrollbarWidth).toBe('function');
  });
});
