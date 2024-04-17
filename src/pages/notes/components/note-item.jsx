export function NoteItem({ item }) {
  return (
    <>
      <p className="p-3">{item.body}</p>
      <div role="group" className="flex gap-2 p-3">
        <button type="button" className="button bg-slate-200 text-slate-700">
          수정
        </button>
        <button
          type="button"
          className="button bg-red-300 border-red-300 text-red-800"
        >
          삭제
        </button>
      </div>
    </>
  );
}
