import React, { FC, useState } from 'react';

import Button from '@/components/Button';
import Flashcard from '@/components/Flashcard';
import { PageWrapper } from './PageWrapper';
import useRandomLocation from '@/hooks/useRandomLocation';
import { Note } from '@/types/note';
import getNote from '@/utils/getNote';

const FretboardFlashcards: FC = () => {
  const { fret, refresh, string } = useRandomLocation();
  const note = getNote(string, fret);
  const [selectedNote, setSelectedNote] = useState<Note>();
  const isCorrect = selectedNote === note;
  return (
    <PageWrapper>
      <h1>Fretboard Flashcards</h1>
      <Flashcard
        fret={fret}
        onSelect={(note) => {
          setSelectedNote(note);
        }}
        string={string}
      />
      {selectedNote && isCorrect && <p>correct!</p>}
      {selectedNote && !isCorrect && <p>wrong</p>}
      <Button
        onClick={() => {
          setSelectedNote(undefined);
          refresh();
        }}
      >
        Refresh
      </Button>
    </PageWrapper>
  );
};

export default FretboardFlashcards;
