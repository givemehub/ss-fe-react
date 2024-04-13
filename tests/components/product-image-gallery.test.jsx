import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductImageGallery } from '@/components';

describe('ProductImageGallery 컴포넌트', () => {
  it('빈 배열이 전달된 경우, 아무 것도 화면에 렌더링하지 않음', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('imageUrls 배열 데이터 리스트 렌더링', () => {
    const imageUrls = [
      {
        id: 1,
        src: 'react.jpg',
        alt: 'React',
      },
      {
        id: 2,
        src: 'react-router.jpg',
        alt: 'React Router',
      },
    ];

    render(<ProductImageGallery imageUrls={imageUrls} />);
    // screen.debug();

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(imageUrls.length);
    imageUrls.forEach((image, index) => {
      const currentImage = images[index];
      expect(currentImage).toHaveAttribute('src', image.src);
      expect(currentImage).toHaveAttribute('alt', image.alt);
    });
  });
});
