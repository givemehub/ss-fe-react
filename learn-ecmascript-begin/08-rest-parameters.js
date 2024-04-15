// --------------------------------------------------------------------------
// rest parameters

// 전개 구문
const list = ['react', 'redux'];
const combineList = ['zustand', ...list, 'jotai'];

console.log(combineList);

// 나머지 매개변수 (함수의 매개변수 영역) -> 배열로 반환
function callListItem(fisrtItem, ...items /* items = [one, two, three] */) {
  console.log(items);
}

// 전개 구문
callListItem(...combineList);

function _sum() {
  const numbers = Array.from(arguments);
  return numbers.reduce((result, number) => result + number, 0);
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
// 참고: https://mzl.la/43Ro9yp
const sum = (...numbers) => numbers.reduce((total, count) => total + count);

let result1_1 = _sum(2, 3, 9, 12, 105);
let result1_2 = sum(2, 3, 9, 12, 105);
console.log(Object.is(result1_1, result1_2));

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);
console.log(Object.is(result2_1, result2_2));
