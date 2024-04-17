import { NoteEdit } from './note-edit';
import { NoteItem } from './note-item';

export function NoteList({ data }) {
  // 1. 수정 모드 상태 관리
  //    - 수정 모드가 아닌 경우, Note 렌더링
  //    - 수정 모드인 경우, NoteEdit 렌더링
  const isEditMode = false;

  return (
    <ul className="flex flex-col gap-2 my-6">
      {data?.map((item) => (
        <li
          key={item.uid}
          className="flex gap-2 justify-between items-center bg-white rounded-md shadow"
        >
          {!isEditMode ? <NoteItem item={item} /> : <NoteEdit item={item} />}
        </li>
      ))}
    </ul>
  );
}
