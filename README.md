# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#16-forwarding-ref <폴더_이름>
```

## 참조(Ref) 전달

기본적으로 하위 컴포넌트 내부의 DOM 요소는 외부에서 접근할 수 없습니다.
때때로 상위 컴포넌트에서 하위 컴포넌트 내부의 DOM 요소에 접근해 조작해야 하는 상황이 필요하곤 합니다.
이런 경우 참조(ref)를 하위 컴포넌트에 전달해 하위 컴포넌트 내부의 DOM 요소에 연결하여 접근/조작해야 합니다.

- [React.forwardRef](https://react.dev/reference/react/forwardRef) 고차 컴포넌트를 사용해 이 문제를 해결할 수 있습니다.