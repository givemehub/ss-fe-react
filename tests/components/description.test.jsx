import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Description } from '@/components';

describe('Description 컴포넌트', () => {
  it('기본 슬롯 렌더링', () => {
    const props = {
      children:
        'React의 children 속성(prop)은 웹 표준의 Default Slot과 같습니다.',
    };

    render(<Description>{props.children}</Description>);
    // screen.debug();

    const description = screen.getByRole('paragraph');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(props.children);
    expect(description).toHaveTextContent(/default slot/i);
  });

  it('message 이름이 부여된 슬롯 렌더링', () => {
    render(
      <Description message="message 속성이 NAMED SLOT">
        React의 children 속성(prop)은 웹 표준의 Default Slot과 같습니다.
      </Description>
    );
    // screen.debug();

    expect(screen.getByRole('paragraph')).toHaveTextContent(/named slot/i);
  });
});
