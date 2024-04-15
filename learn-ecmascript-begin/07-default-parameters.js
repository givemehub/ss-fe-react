// --------------------------------------------------------------------------
// default parameters

// 🔶 기본값 매개변수를 활용하고, nullish 연산자를 제거하세요.
// 참고: https://mzl.la/3JkRZBH
// const randomNumber = (min = 0, max = 10) => {
// const randomNumber = (options) => {
// const randomNumber = (options = {}) => {
// const randomNumber = ({ min, max } = {}) => {
// const randomNumber = ({ min = 0, max = 10 } = {}) => {
const randomNumber = ({ min: initMin = 0, max = 10 } = {}) => {
  // console.log(min, max);

  // console.log(options);
  // min = min ?? 0;
  // max = max ?? 10;

  // const config = { min: 0, max: 10, ...options };
  // console.log(config);

  // const { min, max } = config;

  return Math.round(Math.random() * (max - initMin)) + initMin;
};

let n1 = randomNumber(); /* options = undefined */
console.log(n1, n1 >= 0 && n1 <= 10);

let n2 = randomNumber({ min: 5 } /* options {} */);
console.log(n2, n2 >= 5 && n2 <= 10);

let n3 = randomNumber({ max: 7, min: 5 });
console.log(n3, n3 >= 5 && n3 <= 7);
