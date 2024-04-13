# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#07-component-test <폴더_이름>
```

## 테스팅 라이브러리

컴포넌트 테스트를 위한 테스팅 환경을 구성합니다.

- 테스팅 라이브러리 ([참고](https://testing-library.com/))
- jsdom ([참고](https://www.npmjs.com/package/jsdom))
- Ecosystem > jest-dom ([참고](https://testing-library.com/docs/ecosystem-jest-dom))
- Frameworks > React Testing Library ([참고](https://testing-library.com/docs/react-testing-library/intro))
- User Interactions ([참고](https://testing-library.com/docs/user-event/intro))
- 절대 경로 설정 ([참고](https://ko.vitejs.dev/config/shared-options.html#resolve-alias))
- `jsconfig.json` 설정 ([참고](https://code.visualstudio.com/docs/languages/jsconfig#_jsconfig-options))
- ESLint 구성: React 버전 명시 ([참고](https://github.com/jsx-eslint/eslint-plugin-react#configuration-legacy-eslintrc-))
- 테스트 환경 설정 ([참고](https://vitest.dev/config/#environment))
- 테스트 설정 파일 작성 ([참고](https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest))

## 테스트 목적

유지 관리가 가능하고, 견고하며 신뢰할 수 있는 테스트를 작성하는 방법을 학습합니다.

- 렌더링 테스트
- 사용자 인터랙션 테스트

컴포넌트 구현(implemetation)이 아닌, 동작(behavior)을 테스트합니다.

- [구현] 어떻게 구현되는 지
- [행동] 앱에서 처리하는 일

## 컴포넌트 테스트 (실습)

작성한 컴포넌트를 테스트하는 코드를 작성합니다.

- `app.jsx`
- `components/headline.jsx`
- `components/description.jsx`
- `components/link.jsx`