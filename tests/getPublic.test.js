import { expect, it, describe } from 'vitest';
import { getPublic } from '../src/utils/getPublic';

describe('getPublic 테스트', () => {
  it('getPublic 함수 반환 값 타입은 "string"', () => {
    expect(getPublic('react.svg')).toBeTypeOf('string');
  });

  it('getPublic 함수 반환 값 유효성', () => {
    expect(getPublic('react.svg')).toBe(process.env.BASE_URL + 'react.svg');
  });
});
