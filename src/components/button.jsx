export function Button({ type = 'button', disabled = false, children }) {
  const handleClick = (event) => {
    console.log(`clicked ${children} ${event.currentTarget.localName}`);
  };

  const handleClickSpan = (e) => {
    console.log(e.target.localName);
    e.stopPropagation();
  };

  const handlePointerEnter = (e) => {
    console.log(e.type);
  };

  const handlePointerLeave = (e) => {
    console.log(e.type);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      // onPointerEnter={handlePointerEnter}
      // onPointerLeave={handlePointerLeave}
    >
      <span
        onClick={handleClickSpan}
        style={{
          display: 'inline-block',
          blockSize: '100%',
          padding: 8,
          backgroundColor: 'rgba(100, 100, 100, 0.2)',
        }}
      >
        {children}
      </span>
    </button>
  );
}
