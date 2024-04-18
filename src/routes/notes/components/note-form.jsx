import { useId, useState } from 'react';

export function NoteForm({ onCreate }) {
  const id = useId();

  const [note, setNote] = useState('');
  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const input = formElement.querySelector('input');
    const submitButton = formElement.querySelector('button[type="submit"]');

    if (submitButton.getAttribute('aria-disabled') === 'true') {
      alert('노트 내용을 기입하고 추가 버튼을 누르세요');
      input.focus();
      return;
    }

    const formData = new FormData(formElement);

    const newNote = {
      author: '야무',
      content: formData.get('note'),
    };

    await onCreate?.(newNote);
    setNote('');
  };

  return (
    <form className="flex gap-2 justify-between w-full" onSubmit={handleCreate}>
      <div className="flex-1">
        <label htmlFor={id} className="sr-only">
          노트
        </label>
        <input
          id={id}
          type="text"
          name="note"
          value={note}
          onChange={handleNote}
          placeholder="노트 내용 기입"
          className="w-full p-3 rounded "
        />
      </div>
      <button
        type="submit"
        aria-disabled={!note}
        className="button px-4 border-slate-400/40 disabled:border-slate-400"
      >
        추가
      </button>
    </form>
  );
}
