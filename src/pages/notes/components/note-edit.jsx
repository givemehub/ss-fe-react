export function NoteEdit({ item, onEditModeOff, onEdit }) {
  const handleEditNote = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const editNote = {
      id: item.id,
      author: item.author,
      body: formData.get('editNote'),
    };

    await onEdit?.(editNote);
    onEditModeOff?.();
  };

  return (
    <form
      onSubmit={handleEditNote}
      className="flex p-3 ring-2 rounded-md w-full gap-4 justify-between"
    >
      <label className="sr-only">수정할 노트</label>
      <input
        type="text"
        name="editNote"
        defaultValue={item.body}
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
          onClick={onEditModeOff}
        >
          취소
        </button>
      </div>
    </form>
  );
}
