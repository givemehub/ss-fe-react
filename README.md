# 웹 프론트엔드﹣에센셜 (React)

삼성전자 아카데미 학습 저장소

## 학습 저장소 복제

학습 저장소를 복제하는 명령어를 복사하여 터미널에 붙여넣고 실행합니다.

```sh
npx degit yamoo9/ss-fe-react#12-sharing-data-between-components <폴더_이름>
```

## 컴포넌트 간, 데이터 공유

컴포넌트의 상태는 외부에서 접근할 수 없어 형제 컴포넌트와 공유할 수 없습니다.
그러므로 형제 컴포넌트 간에 데이터를 공유하려면 상태를 가장 가까운 공동의 상위 컴포넌트로 끌어올려야 합니다.
이를 "상태 끌어올리기(Lifting State up)"라고 부릅니다.

예를 들어 UserList 컴포넌트의 상태는 형제 컴포넌트에서 접근할 수 없습니다.

- UserSearchBox
- UserList (상태)
- UserListCount

그러므로 형제 컴포넌트 간 데이터를 공유하려면 
가장 가까운 상위 컴포넌트에서 상태를 관리해야 합니다.

- UsersPage (상태)
    - UserSearchBox (데이터 공유)
    - UserList (데이터 공유)
    - UserListCount (데이터 공유)