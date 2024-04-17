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
//   let emoji = null;

//   switch (type) {
//     default:
//     case 'greet':
//       emoji = EMOJI_TYPE.greet;
//       break;
//     case 'angry':
//       emoji = EMOJI_TYPE.angry;
//       break;
//     case 'embarrassed':
//       emoji = EMOJI_TYPE.embarrassed;
//   }

//   if (message) {
//     return (
//       <p {...restProps}>
//         {emoji} {message}
//       </p>
//     );
//   } else {
//     return (
//       <p {...restProps}>
//         {emoji} {children}
//       </p>
//     );
//   }
// }

// && 또는 || 연산자 활용 조건부 렌더링
// export function Description({ type, message, children, ...restProps }) {
//   const emoji = EMOJI_TYPE[type]; // EMOJI_TYPE['angry']
//   return (
//     <p {...restProps}>
//       {emoji} {message || children}
//     </p>
//   );
// }

// 터너리(ternary, 삼항 연산자 식 조건 ? 참인 값 : 거짓인 값) 활용
// export function Description({ type, message, children, ...restProps }) {
//   const emoji = EMOJI_TYPE[type];
//   return (
//     <p {...restProps}>
//       {emoji} {message ? message : children}
//     </p>
//   );
// }

// null 병합 연산자(??) 활용
// export function Description({ type, message, children, ...restProps }) {
//   const emoji = EMOJI_TYPE[type] ?? '🤔';
//   return (
//     <p {...restProps}>
//       {emoji} {message ? message : children}
//     </p>
//   );
// }

const printemoji = {
  pin: () => '📌',
  gear: () => '⚙️',
  broccoli: () => '🥦',
};

const EMOJI_TYPE = {
  greet: { icon: '😃', emotion: '신남' },
  angry: { icon: '😡', emotion: '화남' },
  embarrassed: { icon: '😖', emotion: '난감' },
};

// 옵셔널 체이닝(?.) 활용
export function Description({ type, message, children, hide, ...restProps }) {
  const emoji = EMOJI_TYPE[type] ?? { icon: '🤔', emotion: '생각 중...' };
  console.log(emoji);

  let printMessage = `${message ? message : children}`.trim();

  // if (printemoji && typeof printemoji.broccoli === 'function') {
  printMessage += printemoji.apple?.() ?? '';
  // }

  const isHidden = { display: !hide ? 'block' : 'none' };
  const { icon, emotion } = emoji;

  return (
    <p style={isHidden} {...restProps}>
      <span title={emotion} aria-label={emotion}>
        {icon}
      </span>{' '}
      {printMessage}
    </p>
  );
}
