import { it, expect, describe } from 'vitest';
import numberWithComma from '../../src/utils/numberWithComma';

describe('numberWithComma 테스트', () => {
  it('numberWithComma 함수 반환 값 타입은 "string"', () => {
    expect(numberWithComma(1000)).toBeTypeOf('string');
  });
  it('numberWithComma(1000) 함수 반환 값은 "1,000"', () => {
    expect(numberWithComma(1000)).toBe('1,000');
  });
});
