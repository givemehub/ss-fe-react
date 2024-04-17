/* eslint-disable no-unused-vars */

export function Button({ type = 'button', disabled = false, children }) {
  const handleClick = (e) => {
    console.log('span => button', e.target === e.currentTarget);
    console.log(`clicked ${children} ${e.currentTarget.localName}`);
  };

  const handleClickSpan = (e) => {
    console.log('only span', e.target === e.currentTarget);
    // console.log(e.target.localName);
    // console.log(e.currentTarget.localName);
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
