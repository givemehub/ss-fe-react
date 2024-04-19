# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#19-note-app-with-reducer <폴더_이름>
```

## 상태 로직을 리듀서로 관리하기

컴포넌트 내부에 상태를 업데이트하는 다수의 이벤트 핸들러가 포함된 경우, 컴포넌트 관리가 쉽지 않습니다. 
이런 경우 상태를 업데이트하는 모든 로직을 [useReducer](https://ko.react.dev/reference/react/useReducer) 훅을 사용해 컴포넌트 외부에서 리듀서(reducer) 함수로 통합해 관리할 수 있습니다.

## 노트 앱 구현 

간단한 노트 앱을 구현해봅니다.

```sh
src/pages/notes/
├── components/
│   ├── note-edit.jsx
│   ├── note-form.jsx
│   ├── note-item.jsx
│   └── note-list.jsx
├── data/
│   └── notes.json
└── notes.jsx
```