import { describe, expect, it, vi } from 'vitest';
import { delay } from '@/utils';

describe('delay 함수', () => {
  const getDelayFunction = () => {
    return vi.fn(delay);
  };

  it('기본적으로 약 1초 뒤에 delay 함수 호출 됨', async () => {
    const delay = getDelayFunction();
    await delay();
    expect(delay).toHaveBeenCalled();
  });
  it('사용자가 설정한 시간(약 2초) 뒤에 delay 함수 호출 됨', async () => {
    const delay = getDelayFunction();
    await delay(2000);
    expect(delay).toHaveBeenCalled();
  });
});
