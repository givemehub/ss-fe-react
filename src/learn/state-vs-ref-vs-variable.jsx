import { useRef, useState } from 'react';
import S from './state-vs-ref-vs-variable.module.css';

export function StateVsRefVsVariable() {
  // 상태(변경되면 리-렌더 ✅ 및 값 기억)
  const [count, setCount] = useState(9);
  const handleCountUp = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  // 참조(변경되도 리-렌더 ❌ 및 값 기억)
  const countRef = useRef(9);
  const handleCountRefUp = () => {
    countRef.current += 3;
    console.log('countRef.current = ', countRef.current);
  };

  // 함수 내부의 지역 변수 (리-렌더 시, 초기화)
  let countVariable = 9;
  const handleCountVariableUp = () => {
    countVariable += 3;
    console.log('countVariable = ', countVariable);
  };

  return (
    <div className={S.component}>
      <button className="button" type="button" onClick={handleCountUp}>
        count = {count}
      </button>
      <button className="button" type="button" onClick={handleCountRefUp}>
        countRef.current = {countRef.current}
      </button>
      <button className="button" type="button" onClick={handleCountVariableUp}>
        countVariable = {countVariable}
      </button>
    </div>
  );
}
