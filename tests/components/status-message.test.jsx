import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusMessage } from '@/components';

describe('StatusMessage 컴포넌트', () => {
  it('초기 상태 메시지는 "대기"를 포함해 렌더링', () => {
    render(<StatusMessage />);
    // screen.debug();

    const element = screen.getByRole('alert');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/대기/);
  });

  it('로딩 상태 메시지는 "로딩"을 포함해 렌더링', () => {
    render(<StatusMessage status="loading" />);
    // screen.debug();

    const element = screen.getByRole('alert');
    expect(element).toHaveTextContent(/로딩/);
  });

  it('성공 상태 메시지는 "성공"을 포함해 렌더링', () => {
    render(<StatusMessage status="successed" />);
    // screen.debug();

    const element = screen.getByRole('alert');
    expect(element).toHaveTextContent(/성공/);
  });

  it('실패 상태 메시지는 "실패"을 포함해 렌더링', () => {
    render(<StatusMessage status="failed" />);
    // screen.debug();

    const element = screen.getByRole('alert');
    expect(element).toHaveTextContent(/실패/);
  });
});
