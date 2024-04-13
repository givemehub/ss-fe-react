# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#10-responding-to-events <폴더_이름>
```

## 이벤트에 응답

사용자와 상호작용하도록 컴포넌트에 이벤트를 연결하고 응답받는 방법을 학습합니다.

- 이벤트 핸들링 - HTML vs. JSX
    - HTML 속성 이름이 모두 소문자 (onclick) vs. JSX는 on* 시작하는 camelCase 포멧 (onClick)
    - HTML 속성 값은 문자(="print()") vs. JSX는 이벤트 prop 값은 이벤트 핸들러(함수) 참조(={print})
    - 이벤트 전파 중지(stop propagation: e.stopPropagation())
- 이벤트 핸들링 - 이벤트 핸들러에 인수 지정(JS, Closure: (payload) => (e) => {})