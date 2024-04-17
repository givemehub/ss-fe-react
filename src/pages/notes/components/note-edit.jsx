export function NoteEdit({ item }) {
  // 1. 노트 수정 기능을 구현합니다.

  // 2. 노트 수정 취소 기능을 구현합니다.

  return (
    <form className="flex p-3 ring-2 rounded-md w-full gap-4 justify-between">
      <label className="sr-only">수정할 노트</label>
      <input
        type="text"
        name="editNote"
        value={item.body}
        className="flex-1 bg-slate-50"
      />
      <div role="alert" className="space-x-2">
        <button
          type="submit"
          className="button bg-slate-300 border-slate-300 text-slate-900"
        >
          저장
        </button>
        <button
          type="reset"
          className="button bg-red-300 border-red-300 text-red-900"
        >
          취소
        </button>
      </div>
    </form>
  );
}
