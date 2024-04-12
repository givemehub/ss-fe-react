# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#01-scaffolding-vitest <폴더_이름>
```

## 테스트 환경 스캐폴딩 (with Vitest)

차세대 테스팅 프레임워크 [vitest](https://vitest.dev/)를 사용해 테스트 환경을 구성합니다.

1. [Vitest를 사용해야 하는 이유](https://vitest.dev/guide/why.html)
1. vitest 패키지 설치 ([참고](https://vitest.dev/guide/#adding-vitest-to-your-project))
1. `package.json` 파일 수정: `test`, `test:ui` 명령 추가 등록 ([참고](https://vitest.dev/guide/#writing-tests))
1. `vite.config.js` 파일 수정 ([참고](https://vitest.dev/guide/#configuring-vitest))
1. 유틸리티 함수 유닛 테스트 (예: `numberWithComma`, `removeSpaceHTMLString` 함수)
1. VS Code 통합 확장 설치 ([참고](https://marketplace.visualstudio.com/items?itemName=vitest.explorer))
