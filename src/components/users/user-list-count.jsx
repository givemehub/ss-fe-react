import { useEffect, useRef } from 'react';
import classes from './user-list-count.module.css';

export function UserListCount({ count, total }) {
  // 이전 렌더링 시 count 값과 다음 렌더링의 count 값 비교
  // const countCompareRef = useRef(0); // { current: 0 }

  // if (countCompareRef.current !== count) {
  //   console.log('이전 count 값과 현재 count 값은 다르다.');
  // }

  // useEffect(() => {
  //   countCompareRef.current = count; // re-render don't trigger
  //   console.log('countCompareRef.current =', countCompareRef.current);
  // }, [count]);

  // 리액트에서 관리되는 DOM 엘리먼트 참조(ref)
  // JSX 마크업에 작성된 리액트 엘리먼트가 실제 DOM 엘리먼트가 된 이후(마운트 이후) 참조한다.
  const outputRef = useRef(null);

  // 콜백 Ref
  // eslint-disable-next-line no-unused-vars
  const callbackRef = (domElement) => {
    console.log(domElement);

    // 명령형 프로그래밍
    domElement.style.color = `hotpink`;
  };

  useEffect(() => {
    const outputElement = outputRef.current;
    outputElement.style.cssText = `
      transition: scale 0.2s cubic-bezier(0.95,-0.28,0.01,1.43);
      scale: 2;
    `;

    const timeoutId = setTimeout(() => {
      outputElement.style.removeProperty('scale');
    }, 1600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <span
      // ref={callbackRef}
      ref={outputRef}
      className={classes.component}
      data-testid="user-list-count"
    >
      {count} / {total}
    </span>
  );
}
