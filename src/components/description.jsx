// if문 조건부 렌더링
// export function Description({ message, children, ...restProps }) {
//   if (message) {
//     return <p {...restProps}>{message}</p>;
//   } else {
//     return <p {...restProps}>{children}</p>;
//   }
// }

const IMOJI_TYPE = {
  greet: '😃',
  angry: '😡',
  embarrassed: '😖',
};

// switch문 조건부 렌더링
// export function Description({ type, message, children, ...restProps }) {
//   let imoji = null;

//   switch (type) {
//     default:
//     case 'greet':
//       imoji = IMOJI_TYPE.greet;
//       break;
//     case 'angry':
//       imoji = IMOJI_TYPE.angry;
//       break;
//     case 'embarrassed':
//       imoji = IMOJI_TYPE.embarrassed;
//   }

//   if (message) {
//     return (
//       <p {...restProps}>
//         {imoji} {message}
//       </p>
//     );
//   } else {
//     return (
//       <p {...restProps}>
//         {imoji} {children}
//       </p>
//     );
//   }
// }

// && 또는 || 연산자 활용 조건부 렌더링
// export function Description({ type, message, children, ...restProps }) {
//   const imoji = IMOJI_TYPE[type]; // IMOJI_TYPE['angry']
//   return (
//     <p {...restProps}>
//       {imoji} {message || children}
//     </p>
//   );
// }

// 터너리(ternary, 삼항 연산자 식 조건 ? 참인 값 : 거짓인 값) 활용
export function Description({ type, message, children, ...restProps }) {
  const imoji = IMOJI_TYPE[type]; // IMOJI_TYPE['angry']
  return (
    <p {...restProps}>
      {imoji} {message ? message : children}
    </p>
  );
}
