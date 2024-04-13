export function ProductImageGallery({ imageUrls = [] }) {
  if (imageUrls.length === 0) return null;

  return (
    <ul>
      {imageUrls.map((image) => (
        <li key={image.id}>
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}
