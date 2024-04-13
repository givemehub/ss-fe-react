import { UserListCount } from '@/components';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('UserListCount 컴포넌트', () => {
  it('"현재 검색된 갯수 / 총 갯수" 렌더링', () => {
    let count = 2;
    let total = 10;

    const { container } = render(<UserListCount count={count} total={total} />);
    expect(container).toHaveTextContent(`${count} / ${total}`);
  });
});
