import { NoteForm } from './components/note-form';
import { NoteList } from './components/note-list';
import dummyNotes from './data/notes.json';

console.log(dummyNotes);

export function NoteApp() {
  // 1. 노트 앱 상태를 관리하는 코드를 작성합니다.
  //    - status
  //    - error
  //    - data

  // 2. 노트 APIs에서 노트 데이터를 읽어옵니다.
  //    - 노트 앱 상태를 업데이트 합니다.
  //    - 중복된 요청은 중단(abort) 설정

  // 3. status 값이 'pending'인 경우, 데이터 로딩 중임을 화면에 표시합니다.

  // 4. status 값이 'error'인 경우, 오류 메시지가 화면에 표시되도록 설정합니다.

  // 5. NoteApp이 반환하는 마크업(JSX) 코드를 상황에 따라 적절하게 작성합니다.
  return (
    <>
      <NoteForm />
      <NoteList data={dummyNotes} />
    </>
  );
}
