/**@type {(n: number) => string} */
export default function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// 모듈 내보내기(export) 문
// 1. 기본 내보내기 (default export)
// export default numberWithComma;
// 1. 이름으로 내보내기 (named export)
// export numberWithComma;

// 모듈 가져오기(import) 문
// 1. 기본 모듈 가져오기
// import numberWithComma from './module.js';
// 2. 이름으로 내보내진 모듈 가져오기
// import * as module from './module.js';
// import { numberWithComma } from './module.js';

// module { numberWithComma }
// module.numberWithComma;
