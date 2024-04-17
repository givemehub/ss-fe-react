export const STATUS_MESSAGES = {
  pending: '⌛️ 대기',
  loading: '⏳ 로딩 중...',
  successed: '✅ 로딩 성공!',
  failed: '❌ 로딩 실패.',
};

export function StatusMessage({ status }) {
  const { pending, loading, successed, failed } = STATUS_MESSAGES;
  let statusMessage = '';

  // switch문
  switch (status) {
    default:
    case 'pending':
      statusMessage = pending;
      break;
    case 'loading':
      statusMessage = loading;
      break;
    case 'success':
      statusMessage = successed;
      break;
    case 'fail':
      statusMessage = failed;
  }

  return <p role="alert">{statusMessage}</p>;
}
