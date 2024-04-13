import { it, expect, describe } from 'vitest';
import removeSpaceHTMLString from '@/utils/removeSpaceHTMLString';

describe('removeSpaceHTMLString 테스트', () => {
  const htmlString = /* html */ `
    <figure>
      <img src="logo.jpg" alt="React" />
      <figcaption>리액트는 사용자 인터페이스 구축 라이브러리</figcaption>
    </figure>
  `;

  it('removeSpaceHTMLString 함수의 반환 값 타입은 "string"', () => {
    expect(removeSpaceHTMLString(htmlString)).toBeTypeOf('string');
  });

  it('removeSpaceHTMLString 함수의 반환 값은 태그 사이 공백 없음', () => {
    const nonSpaceBetweenHTMLString = `<figure><img src="logo.jpg" alt="React" /><figcaption>리액트는 사용자 인터페이스 구축 라이브러리</figcaption></figure>`;
    expect(removeSpaceHTMLString(htmlString)).toBe(nonSpaceBetweenHTMLString);
  });
});
