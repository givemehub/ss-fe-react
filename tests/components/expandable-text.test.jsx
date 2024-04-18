import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExpandableText } from '@/components';

describe('ExpandableText', () => {
  it.only('축소된 텍스트 렌더링', () => {
    let textContent = '상태가 변경된 이후 화면이 업데이트 됨을 테스트합니다.';
    render(<ExpandableText>{textContent}</ExpandableText>);

    screen.debug();
    expect(1 + 1).toBe(2);
  });

  it('텍스트가 제한 글자수보다 작은 경우 버튼 요소는 표시되지 않음', () => {});

  it('텍스트가 제한 글자수보다 큰 경우 버튼 요소는 화면에 표시됨', () => {});

  it('확장 버튼을 누르면 텍스트 확장, 축소 버튼을 누르면 텍스트 축소됨', () => {});
});
