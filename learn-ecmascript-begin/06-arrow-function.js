// --------------------------------------------------------------------------
// arrow function
// 화살표 함수 표현식
// - 함수 내, arguments 사용 못함
// - this 참조가 일반 함수랑 다름

// 🔶 일반 함수 선언을 화살표 함수 표현식으로 변경합니다.
// 참고: https://mzl.la/3Uej8M3
const currencyKR = (value) => `${numberWithComma(value)}원`;

// 🔶 일반 함수 선언을 화살표 함수 표현식으로 변경합니다.
const numberWithComma = (value) =>
  value.toString().replace?.(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const run = () => currencyKR(2_107_000);

console.log(run.constructor === Function);

console.log(run());

const arrowFn = () => console.log(this);

console.log(arrowFn());
