import { useState } from 'react';

import Note from '@/types/note';
import getRandomNumber from '@/utils/getRandomNumber';

function useRandomNote(): { note: Note; refresh: () => void } {
  const [note, setNote] = useState<Note>(getRandomNote());
  return {
    note,
    refresh: () => {
      setNote(getRandomNote());
    },
  };
}

function getRandomNote(): Note {
  const index = getRandomNumber(NOTES_WITHOUT_ACCIDENTALS.length);
  return NOTES_WITHOUT_ACCIDENTALS[index];
}

const NOTES_WITHOUT_ACCIDENTALS = [
  Note.A,
  Note.B,
  Note.C,
  Note.D,
  Note.E,
  Note.F,
  Note.G,
];

export default useRandomNote;
