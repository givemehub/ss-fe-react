import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { STATUS_MESSAGES, StatusMessage } from '@/components';

describe('StatusMessage 컴포넌트', () => {
  const renderComponent = (status) => {
    render(<StatusMessage status={status} />);

    return {
      element: screen.getByRole('alert'),
    };
  };

  it('기본(pending) 상태 렌더링', () => {
    const { element } = renderComponent();

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(STATUS_MESSAGES.pending);
  });

  it('로딩(loading) 상태 렌더링', () => {
    const { element } = renderComponent('loading');
    expect(element).toHaveTextContent(STATUS_MESSAGES.loading);
  });

  it('성공(success) 상태 렌더링', () => {
    const { element } = renderComponent('success');
    expect(element).toHaveTextContent(STATUS_MESSAGES.successed);
  });

  it('실패(fail) 상태 렌더링', () => {
    const { element } = renderComponent('fail');
    expect(element).toHaveTextContent(STATUS_MESSAGES.failed);
  });
});
