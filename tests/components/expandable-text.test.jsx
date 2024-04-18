import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExpandableText, LIMIT } from '@/components';

describe('ExpandableText', () => {
  const renderComponent = (text, limit = LIMIT) => {
    render(<ExpandableText limit={limit}>{text}</ExpandableText>);
    return {
      user: userEvent.setup(),
      paragraph: screen.getByRole('paragraph'),
      button: screen.queryByRole('button'),
    };
  };

  // 렌더링 테스트
  it('텍스트가 제한 글자수보다 작은 경우, 버튼 요소는 표시되지 않음', () => {
    let textContent = '화면이 업데이트 됨을 테스트합니다.';
    const { paragraph } = renderComponent(textContent);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.textContent).toHaveLength(textContent.length);
  });

  it('텍스트가 제한 글자수보다 큰 경우, 버튼 요소는 화면에 표시됨', () => {
    let text =
      'ExpandableText 컴포넌트에 상태를 선언한 후, 상호작용에 의해 상태가 변경된 이후 화면이 업데이트 됨을 테스트합니다.';
    const { button } = renderComponent(text, 40);
    expect(button).toBeInTheDocument();
    screen.debug();
  });

  // 상호작용 테스트
  it('(사용자가) 확장 버튼을 누르면 텍스트 확장, 축소 버튼을 누르면 텍스트 축소됨', async () => {
    let limit = 36;
    let text =
      'ExpandableText 컴포넌트에 상태를 선언한 후, 상호작용에 의해 상태가 변경된 이후 화면이 업데이트 됨을 테스트합니다.';
    const { user, button, paragraph } = renderComponent(text, limit);

    // 확장 전, 상황
    expect(paragraph).toHaveTextContent(text.slice(0, limit) + '...');
    expect(paragraph.textContent.length).toBeLessThan(text.length);

    // 확장: 사용자가 확장 버튼 클릭
    await user.click(button);
    expect(paragraph).toHaveTextContent(text);
    expect(paragraph.textContent).toHaveLength(text.length);
    expect(button).toHaveTextContent(/축소/);

    // 축소: 사용자가 확장 버튼 클릭
    await user.click(button);
    expect(paragraph).toHaveTextContent(text.slice(0, limit) + '...');
    expect(paragraph.textContent.length).toBeLessThan(text.length);
    expect(button).toHaveTextContent(/확장/);
  });
});
