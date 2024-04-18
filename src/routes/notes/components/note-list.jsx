import { NoteEdit } from './note-edit';
import { NoteItem } from './note-item';
import { useState } from 'react';

export function NoteList({ data, onEdit, onDelete }) {
  const [editId, setEditId] = useState(-1);

  const handleEditModeOn = (id) => () => setEditId(id);
  const handleEditModeOff = () => setEditId(-1);

  return (
    <ul className="flex flex-col gap-2 my-6">
      {data?.map((item) => {
        return (
          <li
            key={item.id}
            className="flex gap-2 justify-between items-center bg-white rounded-md shadow"
          >
            {item.id !== editId ? (
              <NoteItem
                item={item}
                onEditModeOn={handleEditModeOn}
                onDelete={onDelete}
              />
            ) : (
              <NoteEdit
                item={item}
                onEditModeOff={handleEditModeOff}
                onEdit={onEdit}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
