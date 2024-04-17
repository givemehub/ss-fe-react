import { numberWithComma } from '@/utils';

// 컴포넌트 구현
export function ProductImageGallery({ data = [] }) {
  if (data.length === 0) return null;

  return (
    <ul className="ProductImageGallery">
      {data.map((item) => {
        return (
          <li key={item.id}>
            <figure>
              <img data-testid="image" src={item.image} alt="" />
              <figcaption>
                <span>{item.title}</span>
                <span data-testid="price">{numberWithComma(item.price)}원</span>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
