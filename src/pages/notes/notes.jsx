import { createNote, deleteNote, editNote } from '@/api/notes';
import { NoteForm } from './components/note-form';
import { NoteList } from './components/note-list';
import useNotes from './hooks/useNotes';
import { createNoteAction, deleteNoteAction, editNoteAction } from './reducer';

export function NoteApp() {
  const { notes, status, error, dispatch } = useNotes();

  const handleCreateNote = async (newNote) => {
    // 서버의 데이터베이스에 생성
    const createdNote = await createNote(newNote);
    // 리액트 앱 화면 업데이트
    dispatch(createNoteAction(createdNote));
  };

  const handleEditNote = async (willEditNote) => {
    const editedNote = await editNote(willEditNote);
    dispatch(editNoteAction(editedNote));
  };

  const handleDeleteNote = (deleteId) => async () => {
    await deleteNote(deleteId);
    dispatch(deleteNoteAction(deleteId));
  };

  return (
    <>
      <NoteForm onCreate={handleCreateNote} />
      {status === 'loading' ? (
        <div role="alert" className="px-3 py-5 bg-white mt-6 rounded shadow">
          노트 정보를 읽고 있습니다...
        </div>
      ) : error ? (
        <div
          role="alert"
          className="px-3 py-5 bg-red-50 text-red-900 mt-5  rounded shadow"
        >
          🚨 {error.message}
        </div>
      ) : (
        <NoteList
          data={notes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      )}
    </>
  );
}
