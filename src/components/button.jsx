export function Button() {
  return (
    // WAI-ARIA
    <button
      aria-label="좋아요"
      data-testid="button"
      className="button"
      type="button"
    >
      ❤️
    </button>
  );
}
