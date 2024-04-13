import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExpandableText } from '@/components';
import userEvent from '@testing-library/user-event';

describe('ExpandableText 컴포넌트', () => {
  const renderComponent = (text, limit) => {
    render(<ExpandableText text={text} limit={limit} />);
    const paragraph = screen.getByRole('paragraph');
    const button = screen.queryByRole('button');

    return {
      paragraph,
      button,
    };
  };

  it('텍스트가 제한 글자수보다 작은 경우 버튼 요소는 표시되지 않음', () => {
    let text = '확장 가능한 텍스트 컴포넌트';
    const { paragraph, button } = renderComponent(text);
    expect(paragraph).toHaveTextContent(text);
    expect(button).not.toBeInTheDocument();
  });

  it('텍스트가 제한 글자수보다 큰 경우 버튼 요소는 화면에 표시됨', () => {
    let text = '글자 수가 제한 글자 수보다 길다면 텍스트를 말줄임 처리됩니다.';
    let limit = 20;

    const { paragraph, button } = renderComponent(text, limit);
    expect(paragraph.textContent).toHaveLength(limit + 3);
    expect(button).toBeInTheDocument();
  });

  it('확장 버튼을 누르면 텍스트 확장, 축소 버튼을 누르면 텍스트 축소됨', async () => {
    const user = userEvent.setup();
    let text = '확장 버튼이 표시된 경우는 제한 글자 수보다 큰 경우입니다.';
    let limit = 14;

    const { paragraph, button } = renderComponent(text, limit);

    expect(paragraph.textContent).toHaveLength(limit + 3);
    screen.debug();

    await user.click(button);
    expect(paragraph.textContent).toHaveLength(text.length);
    screen.debug();

    await user.click(button);
    expect(paragraph.textContent).toHaveLength(limit + 3);
    screen.debug();
  });
});
