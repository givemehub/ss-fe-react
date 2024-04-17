// 컴포넌트 테스트
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductImageGallery } from './product-image-gallery';
import { numberWithComma } from '@/utils';

describe('ProductImageGallery 컴포넌트', () => {
  const products = [
    {
      id: crypto.randomUUID(),
      title: '두부 5kg',
      price: 9800,
      image:
        'https://images.pexels.com/photos/4518610/pexels-photo-4518610.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: crypto.randomUUID(),
      title: '만두 3kg',
      price: 26700,
      image:
        'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const renderComponent = (data) => {
    const { container } = render(<ProductImageGallery data={data} />);
    const images = screen.queryAllByTestId('image');
    const prices = screen.queryAllByTestId('price');

    return {
      container,
      images,
      prices,
    };
  };

  it('products 데이터 리스트 렌더링', () => {
    const { container, images, prices } = renderComponent(products);

    expect(container).toBeInTheDocument();

    products.forEach((product, index) => {
      expect(images[index]).toHaveAttribute('src', product.image);
      expect(prices[index]).toHaveTextContent(
        new RegExp(numberWithComma(product.price))
      );
    });
  });

  it('빈 데이터인 경우 렌더링', () => {
    const { container } = renderComponent([]);
    expect(container).toBeEmptyDOMElement();
    screen.debug();
  });
});
