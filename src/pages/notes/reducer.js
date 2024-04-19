export const initialState = [];

export default function reducer(state, action) {
  switch (action.type) {
    case 'notes/set':
      return action.payload;
    case 'notes/create':
      return [action.payload, ...state];
    case 'notes/edit':
      return state.map((item) => {
        const editNote = action.payload;
        return item.id !== editNote.id ? item : editNote;
      });
    case 'notes/delete':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

// Action Creator
export const setNotesAction = (newNotes) => ({
  type: 'notes/set',
  payload: newNotes,
});

export const createNoteAction = (newNote) => ({
  type: 'notes/create',
  payload: newNote,
});

export const editNoteAction = (editNote) => ({
  type: 'notes/edit',
  payload: editNote,
});

export const deleteNoteAction = (deleteId) => ({
  type: 'notes/delete',
  payload: deleteId,
});
