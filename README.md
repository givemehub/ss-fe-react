# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#11-updating-the-screen <폴더_이름>
```

## 화면 업데이트

리액트가 변경을 감지해 화면을 변경하도록 하려면? 상태(state)를 선언하고 변경해야 합니다.

- 상태란? "시간에 따라 변하는 값"
- 재조정이란? "무언가 변경되었는지 확인하고 다시 그림"
- [React.useState](https://react.dev/reference/react/useState) 훅(hook)
    - 배열 구조 분해 할당 `[value, setValue]`
    - 이름 작성 규칙 (관례) `[name, setName]` | `[age, updateAge]`
    - 초기 값 설정 `useState(intialValue)`
    - 상태 업데이트 함수의 2가지 API ([새로운 값 업데이트](https://react.dev/reference/react/useState#adding-state-to-a-component) | [이전 상태 기반 업데이트](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state))
    - [객체 및 배열 상태 업데이트 (합성 패턴 활용)](https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state)
    - 불필요한 처리를 우회하기 위한 [초기화 함수](https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state)
    - 속성(props: read only) vs. 상태(states: read and write)
    - [상태는 스냅샷, 즉시 업데이트 되지 않아](https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value)

## 상호작용 테스트

### TermsAndConditions

TermsAndConditions 컴포넌트에 상태를 선언한 후, 상호작용에 의해 상태가 변경된 이후 화면이 업데이트 됨을 테스트합니다.

- 이용 약관 동의 여부(상태)
- 이용 약관 상태 변경에 따른 화면 업데이트

### ExpandableText

ExpandableText 컴포넌트에 상태를 선언한 후, 상호작용에 의해 상태가 변경된 이후 화면이 업데이트 됨을 테스트합니다.

- 확장 여부(상태)
- 확장 상태 변경에 따른 화면 업데이트