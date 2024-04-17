// if문 조건부 렌더링
// export function Description({ message, children, ...restProps }) {
//   if (message) {
//     return <p {...restProps}>{message}</p>;
//   } else {
//     return <p {...restProps}>{children}</p>;
//   }
// }

// switch문 조건부 렌더링
const IMOJI_TYPE = {
  greet: '😃',
  angry: '😡',
  embarrassed: '😖',
};

export function Description({ type, message, children, ...restProps }) {
  let imoji = null;

  switch (type) {
    default:
    case 'greet':
      imoji = IMOJI_TYPE.greet;
      break;
    case 'angry':
      imoji = IMOJI_TYPE.angry;
      break;
    case 'embarrassed':
      imoji = IMOJI_TYPE.embarrassed;
  }

  if (message) {
    return (
      <p {...restProps}>
        {imoji} {message}
      </p>
    );
  } else {
    return (
      <p {...restProps}>
        {imoji} {children}
      </p>
    );
  }
}
