# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#03-hello-react <폴더_이름>
```

## 안녕! 리액트

사용자 인터페이스 빌딩을 위한 라이브러리 [React](https://react.dev/)의 작동 방식에 대해 학습합니다.

1. [리액트 소개](https://react.dev)
1. `index.html` 파일 수정
    - 정적 마크업 코드 삭제
    - \<noscript\> 추가
    - \<div id="root"\> 요소 추가
1. [ESM>CDN](https://esm.sh)으로 브라우저에서 React 앱 구성
    - `React.createElement` API 사용법 ([참고](https://react.dev/reference/react/createElement))
    - `ReactDOM.createRoot` API 사용법 ([참고](https://react.dev/reference/react-dom/client/createRoot))
