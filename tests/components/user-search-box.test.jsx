import { UserSearchBox } from '@/components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('UserSearchBox 컴포넌트', () => {
  const renderComponent = () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<UserSearchBox onChange={onChange} />);

    return {
      input: screen.getByRole('searchbox'),
      onChange,
      user,
    };
  };

  it('사용자 이름 검색 필드 렌더링', () => {
    const { input } = renderComponent();
    expect(input).toBeInTheDocument();
  });

  it('사용자 이름 검색 시, 입력 내용 렌더링', async () => {
    const { input, user, onChange } = renderComponent();
    const search = '야무';

    await user.type(input, search + `{enter}`);
    expect(onChange).toHaveBeenCalledWith(search);
  });
});
