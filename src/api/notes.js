import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
pb.autoCancellation = true;

export async function readAllNotes() {
  try {
    const notes = await pb.collection('notes').getFullList({
      sort: '-created',
    });

    return notes;
  } catch (error) {
    if (!error.isAbort) {
      return error;
    }
  }
}

export async function createNote(newNote) {
  try {
    return await pb.collection('notes').create(newNote);
  } catch (error) {
    if (!error.isAbort) {
      return error;
    }
  }
}

export async function editNote(editNote) {
  try {
    const { id, ...note } = editNote;
    return await pb.collection('notes').update(id, note);
  } catch (error) {
    if (!error.isAbort) {
      return error;
    }
  }
}

export async function deleteNote(deleteId) {
  try {
    return await pb.collection('notes').delete(deleteId);
  } catch (error) {
    if (!error.isAbort) {
      return error;
    }
  }
}
