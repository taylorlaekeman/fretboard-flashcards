import React, { FC } from 'react';

import Fretboard from '@/components/Fretboard';
import NoteButtons from '@/components/NoteButtons';
import { Note } from '@/types/note';
import String from '@/types/string';

const Flashcard: FC<{
  fret: number;
  onSelect?: (note: Note) => void;
  string: String;
}> = ({ fret, onSelect = () => {}, string }) => {
  return (
    <>
      <Fretboard fret={fret} string={string} />
      <NoteButtons onChange={onSelect} />
    </>
  );
};

export default Flashcard;
