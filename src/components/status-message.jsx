const STATUS_MESSAGES = {
  pending: '⌛️ 대기',
  loading: '⏳ 로딩 중...',
  successed: '✅ 로딩 성공!',
  failed: '❌ 로딩 실패.',
};

export function StatusMessage({ status = 'pending' }) {
  return (
    <span role="alert">
      {status === 'loading'
        ? STATUS_MESSAGES.loading
        : status === 'successed'
        ? STATUS_MESSAGES.successed
        : status === 'failed'
        ? STATUS_MESSAGES.failed
        : STATUS_MESSAGES.pending}
    </span>
  );
}
