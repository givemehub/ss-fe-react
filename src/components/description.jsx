// if문 조건부 렌더링
// export function Description({ message, children, ...restProps }) {
//   if (message) {
//     return <p {...restProps}>{message}</p>;
//   } else {
//     return <p {...restProps}>{children}</p>;
//   }
// }

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
// export function Description({ type, message, children, ...restProps }) {
//   const imoji = IMOJI_TYPE[type];
//   return (
//     <p {...restProps}>
//       {imoji} {message ? message : children}
//     </p>
//   );
// }

// null 병합 연산자(??) 활용
// export function Description({ type, message, children, ...restProps }) {
//   const imoji = IMOJI_TYPE[type] ?? '🤔';
//   return (
//     <p {...restProps}>
//       {imoji} {message ? message : children}
//     </p>
//   );
// }

const printImoji = {
  pin: () => '📌',
  gear: () => '⚙️',
  broccoli: () => '🥦',
};

const IMOJI_TYPE = {
  greet: { icon: '😃', emotion: '신남' },
  angry: { icon: '😡', emotion: '화남' },
  embarrassed: { icon: '😖', emotion: '난감' },
};

// 옵셔널 체이닝(?.) 활용
export function Description({ type, message, children, hide, ...restProps }) {
  const imoji = IMOJI_TYPE[type] ?? { icon: '🤔', emotion: '생각 중...' };
  console.log(imoji);

  let printMessage = `${message ? message : children}`.trim();

  // if (printImoji && typeof printImoji.broccoli === 'function') {
  printMessage += printImoji.apple?.() ?? '';
  // }

  const isHidden = { display: !hide ? 'block' : 'none' };
  const { icon, emotion } = imoji;

  return (
    <p style={isHidden} {...restProps}>
      <span title={emotion} aria-label={emotion}>
        {icon}
      </span>{' '}
      {printMessage}
    </p>
  );
}
