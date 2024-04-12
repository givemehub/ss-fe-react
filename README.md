# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#06-jsx-markup <폴더_이름>
```

## JSX 마크업

JSX 사용이 필수는 아니지만, 리액트 개발에 많은 편의성을 제공합니다.
JSX를 사용해 마크업을 구성하는 방법을 학습합니다.

- **마크업(Markup)** → 데이터 분리
- JSX 슬롯(Slot)
    - 기본 슬롯 (default slot)
    - 이름이 설정된 슬롯 (named slot)
- JSX 속성 데이터 바인딩(valid, invalid)
- JSX 공백 문제 `{" "}` vs. HTML 공백 (`&nbsp;`)
- JSX 주석(Comments)
- JSX, HTML 차이점
    - [JSX] 대소문자 구분 (엄격) vs. [HTML] 대소문자 구분 안함 (느슨)
    - [JSX] 셀프 클로즈 (엄격) vs. [HTML] 셀프 클로즈 해도, 안해도 됨 (느슨)
    - [JSX] 예약어 사용 못함 (엄격) vs. [HTML] 예약어가 뭐임? (느슨)
    - [JSX] `data-*`, `aria-*` 그대로 사용 (자체적으로 인식해서 변환) vs. [HTML] `data-*`, `aria-*` 그대로 사용 (느슨)
    - [JSX] `style` 속성 값을 객체로 설정 (엄격) vs. [HTML] `style` 속성 값을 문자로 설정 (느슨)