export function NoteForm() {
  // 1. <label> 요소와 <input> 요소가 매칭되도록 설정합니다.

  // 2. 리액트에 의해 <input> 요소가 컨트롤 되도록 설정합니다.
  //    - 레퍼런스 활용
  //    - 디바운싱 적용 (성능 이슈 해결)
  //    - 펜딩 상태 시 비활성화 처리

  return (
    <form className="flex gap-2 justify-between w-full">
      <div className="flex-1">
        <label className="sr-only">노트</label>
        <input
          type="text"
          placeholder="노트 내용 기입"
          className="w-full p-3 rounded"
        />
      </div>
      <button
        type="submit"
        className="button px-4 border-slate-400/40 disabled:border-slate-400"
      >
        추가
      </button>
    </form>
  );
}
