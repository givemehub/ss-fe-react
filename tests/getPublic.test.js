import { getPublic } from '../src/utils/getPublic';
import { it, expect, describe } from 'vitest';

describe('getPubilc 함수', () => {
  let filePath = 'react.svg';

  it('함수의 반환 값 유형은 "string"', () => {
    const pathString = getPublic(filePath);
    // expect(값).매쳐함수(기대값)
    expect(pathString).toBeTypeOf('string');
  });

  it('함수의 반환 값은 기본 경로(baseURL)를 포함한 값을 반환', () => {
    const pathString = getPublic(filePath);
    expect(pathString).toBe(import.meta.env.BASE_URL + filePath);
  });
});
