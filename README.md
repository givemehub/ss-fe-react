# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#14-sync-with-effects <폴더_이름>
```

## 이펙트를 사용해 외부 시스템과 동기화

일부 컴포넌트는 리액트를 벗어난 외부 시스템을 제어하고 동기화해야 할 수 있습니다.
이는 리액트의 렌더링 프로세스와 관련이 없으므로 리액트가 제공하는 탈출구(escape hatches) 방법을 사용해 제어해야 합니다.

- 이펙트 vs. 이벤트
- [React.useEffect](https://react.dev/reference/react/useEffect) 훅
    - 설정(setup) 함수
    - 종속성 배열(dependencies)
    - 클린업(cleanup) 함수
- 사이드 이펙트(side effects)
  - 네트워크 요청/응답 처리
  - Fetch API ([참고](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API))
  - AbortController ([참고](https://developer.mozilla.org/ko/docs/Web/API/AbortController))