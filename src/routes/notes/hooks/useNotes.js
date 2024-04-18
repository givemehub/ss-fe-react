import { useEffect, useReducer, useState } from 'react';
import { delay } from '@/utils';
import { readAllNotes } from '@/api/notes';
import noteReducer, { initialState, setNotesAction } from '../reducer';

const useStatus = (dispatch) => {
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('loading');

    delay(400).then(() => {
      readAllNotes()
        .then((data) => dispatch(setNotesAction(data)))
        .catch((error) => setError(error))
        .finally(() => setStatus('pending'));
    });
  }, [dispatch]);

  return { status, error };
};

const useNotes = () => {
  const [notes, dispatch] = useReducer(noteReducer, initialState);
  const { status, error } = useStatus(dispatch);

  return { notes, dispatch, status, error };
};

export default useNotes;
