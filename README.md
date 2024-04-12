# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#01-scaffolding-vite <폴더_이름>
```

## 개발 환경 스캐폴딩 (with Vite)

차세대 프론트엔드 개발 도구인 [vite](https://ko.vitejs.dev/)를 사용해 React 개발 환경을 구성합니다.

1. [Vite를 사용해야 하는 이유](https://ko.vitejs.dev/guide/why.html)
1. `index.html` 파일 작성 ([참고](https://ko.vitejs.dev/guide/#index-html-and-project-root))
1. `public/react.svg` 파일 작성 ([참고](https://ko.vitejs.dev/guide/assets.html#the-public-directory))
1. `src/styles/globals.css` 파일 작성 ([참고](./snippets/globals.css))
1. `src/main.js` 파일 작성 ([참고](https://ko.vitejs.dev/guide/assets.html#importing-asset-as-url))
1. vite 패키지 설치 ([참고](https://www.npmjs.com/package/vite))
1. `package.json` 파일 수정
    - 모듈 기본 타입 설정 ([참고](https://nodejs.org/api/packages.html#type))
    - NPM 스크립트 명령 등록 ([참고](https://ko.vitejs.dev/guide/#command-line-interface))
1. `vite.config.js` 파일 작성 ([참고](https://ko.vitejs.dev/config/#configure-vite))
1. `.env.development` 파일 작성 ([참고](https://ko.vitejs.dev/guide/env-and-mode.html#env-files))