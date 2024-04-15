// --------------------------------------------------------------------------
// iteration = iterable , iterator
//
// 이터러블(순회 가능, iterable) 프로토콜(규약, protocol)
// - iterable[Symbol.iterator] 메서드를 가진 객체
// - String, Array
//
// 이터레이터(반복자, iterator) 프로토콜
// - next 메서드를 가진 객체
// - next 메서드를 실행하면 { done: boolean, value: any } 반환
// - done 값이 false 인 경우, 다음 순환 가능 (value 반환)
// - done 값이 true 인 경우, 다음 순환 없음 (value = undefined)
// --------------------------------------------------------------------------

// 🔶 이터러블 프로토콜
// 참고: https://mzl.la/4d4Uyps

// 순회 가능한(Iterable) 내장된 프로토콜: String
let iterable = '당신의 재능 기부가 큰 힘이 됩니다.';

// 이터러블 프로토콜은 [Symbol.iterator] 메서드를 가짐
console.log(typeof iterable[Symbol.iterator]);
// console.log(typeof iterable[Symbol.iterator]());

// 🔶 이터레이터 프로토콜
// 참고: https://mzl.la/49DSy4q

// 순회 가능한 프로토콜의 [Symbol.iterator] 메서드를 실행하면
// 반복자(Iterator) 반환
// const iterator = iterable[Symbol.iterator]();
// console.log(iterator);

// 이터레이터 프로토콜은 next 메서드를 가짐
// console.log(typeof iterator.next);

// 반복자의 next 메서드가 실행되면 { done, value } 반환
// done 값이 true인 경우, 순환 종료
for (let i = 0, l = iterable.length; i <= l; i += 1) {
  const iterator = iterable[Symbol.iterator]();
  const nextValue = iterator.next(); // { done, value }
  // console.log(nextValue);
  // console.log(nextValue.value);
}

// while, do ~ while, for, for ~ in
// for ~ of

// --------------------------------------------------------------------------
// for ~ of 문
//
// - 이터러블 프로토콜을 순환해 이터레이터 객체의 값을 추출해 사용할 수 있습니다.
// - 🔶 실습을 진행합니다.

let designIs = 'design is all. all is design.';
// let designIsIterator = designIs[Symbol.iterator]() ;
// console.log(designIsIterator)

for (const character of designIs) {
  console.log(character);
}

// --------------------------------------------------------------------------
// 이터러블과 전개 연산자
//
// - 배열 내부에 이터러블 프로토콜을 전개하면 이터레이터 객체의 값을 나열할 수 있습니다.
// - 🔶 실습을 진행합니다.

const iterableInsideArray = [...designIs];
console.log(iterableInsideArray);

// --------------------------------------------------------------------------
// 내장된 이터러블 프로토콜
//
// - String
// - Array
// - Set (2015): like Array
// - Map (2015): like Object

// Array
const coffee = ['에스프레소', '아메리카노', '라떼', '카푸치노'];
console.log(typeof coffee[Symbol.iterator]);

// Set
const combinedCoffees = [
  ...coffee.slice(0, 3),
  ...['로부스타', '리베리카', '아라비카'],
  ...coffee.slice(2),
  ...['아라비카', '바닐라 라떼'],
];

console.log(combinedCoffees);
const coffeeTypes = new Set(combinedCoffees);
console.log(coffeeTypes);

console.log(typeof coffeeTypes[Symbol.iterator]);
console.log(Array.isArray([...coffeeTypes]));

// Map
let primaryColor = '#fa5252';

const cssObject = {
  display: 'flex',
  flexFlow: 'row nowrap',
  gap: '20px',
  margin: '0 auto',
  border: `2px solid ${primaryColor}`,
  padding: '2em',
  color: `${primaryColor}`,
  background: 'transparent',
  fontSize: '14px',
};

console.log(cssObject);

const cssEntries = Object.entries(cssObject);
console.log(cssEntries); //[[key, value], [key, value]]

const cssMap = new Map(cssEntries);
console.log(cssMap);

// for ~ of 문을 사용해 이터러블인 cssMap을 순환하여 key, value를 출력해봅니다.
// 🔶 실습을 진행합니다.
for (const [key, value] of cssMap) {
  // const [key, value] = keyValue;
  // const keyValue = { key: key, value: value };
  // const keyValue = { key, value };
  // console.log({ key: key, value: value });
  console.log({ key, value });

  // console.log(key);
  // console.log(value);
}

// for (const key in cssObject) {
//   console.log(key);
//   console.log(cssObject[key]);
// }

for (const key in cssObject) {
  if (Object.hasOwnProperty.call(cssObject, key)) {
    const value = cssObject[key];
    console.log(key);
    console.log(value);
  }
}

for (const [key, value] of Object.entries(cssObject)) {
  console.log({ key, value });
}

// --------------------------------------------------------------------------
// 커스텀 이터러블
//
// - [Symbol.iterator] 메서드를 가진 객체
// - [Symbol.iterator] 메서드는 next 메서드를 가진 객체를 반환
// - next 메서드가 실행되면 { done, value } 객체 반환

const customIterable = {
  _i: 0,
  _distance: 1,
  _max: 100,
  [Symbol.iterator]() {
    let { _i: i, _distance: distance, _max: max } = this;

    return {
      next() {
        if (i < max) {
          const returnValue = { done: false, value: i };
          i += distance;
          return returnValue;
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

// customIterable 이터러블의 값을 나열한 배열을 작성한 후 Console에 출력합니다.
// 🔶 실습을 진행합니다.

// for ~ of 문을 사용해 customIterable 이터러블을 순환해 값을 Console에 출력합니다.
// 🔶 실습을 진행합니다.
