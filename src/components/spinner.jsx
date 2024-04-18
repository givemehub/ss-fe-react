import { getPublic } from '@/utils';

export function Spinner() {
  return (
    <figure
      role="alert"
      style={{ margin: 0, display: 'grid', placeContent: 'center' }}
    >
      <img src={getPublic('spinner.svg')} alt="" height={36} />
      <figcaption style={{ fontSize: 12 }}>데이터 로딩 중...</figcaption>
    </figure>
  );
}
