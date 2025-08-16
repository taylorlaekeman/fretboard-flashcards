import { useCallback, useState } from 'react';

import Note from '../types/note';
import GuitarString from '../types/string';
import { getNote } from '../utils/getNote';

export function useRandomNote(): {
  next: () => { note: Note; noteFret: number; noteString: GuitarString };
  note: Note;
  noteFret: number;
  noteString: GuitarString;
  refresh: () => void;
} {
  const [noteString, setNoteString] = useState<GuitarString>(getRandomString());
  const [noteFret, setNoteFret] = useState<number>(getRandomFret());

  const note = getNote(noteString, noteFret);

  const next = useCallback(() => {
    const newString = getRandomString();
    const newFret = getRandomFret();
    const newNote = getNote(newString, newFret);
    setNoteString(newString);
    setNoteFret(newFret);
    return {
      note: newNote,
      noteFret: newFret,
      noteString: newString,
    };
  }, []);

  return {
    next,
    note,
    noteFret,
    noteString,
    refresh: next,
  };
}

function getRandomString(): GuitarString {
  return Object.values(GuitarString)[Math.floor(Math.random() * 6)];
}

function getRandomFret(): number {
  return Math.floor(Math.random() * 12);
}

export default useRandomNote;
