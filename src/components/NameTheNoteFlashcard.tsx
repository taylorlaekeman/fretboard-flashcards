import dynamic from 'next/dynamic';
import React from 'react';

import { Flashcard as FlashcardWrapper } from './Flashcard';
import NoteButtons from './NoteButtons';
import { PageWrapper } from './PageWrapper';
import { Text } from './Text';
import { Note } from '../types/note';
import { ResultStatus } from '../types/resultStatus';
import GuitarString from '../types/string';
import { getNote } from '../utils/getNote';

const Fretboard = dynamic(() => import('./Fretboard'), { ssr: false });

export function NameTheNoteFlashcard(): React.ReactElement {
  const [cardNumber, setCardNumber] = React.useState<number>(0);
  const [selectedNote, setSelectedNote] = React.useState<Note | undefined>();
  const [noteString, setNoteString] = React.useState<GuitarString>(
    getRandomString(),
  );
  const [noteFret, setNoteFret] = React.useState<number>(getRandomFret());
  const [status, setStatus] = React.useState<ResultStatus | undefined>();

  if (cardNumber === 0) {
    return (
      <FlashcardWrapper
        isNextEnabled
        nextText="Start"
        onNext={() => {
          setCardNumber(1);
        }}
      >
        <Text>Fretboard!</Text>
      </FlashcardWrapper>
    );
  }

  if (cardNumber > TOTAL_CARDS) {
    return (
      <FlashcardWrapper
        isNextEnabled
        nextText="Start"
        onNext={() => {
          setCardNumber(1);
        }}
      >
        <Text>Done!</Text>
      </FlashcardWrapper>
    );
  }

  return (
    <FlashcardWrapper
      cardNumber={cardNumber}
      isNextEnabled={status === ResultStatus.Correct}
      onNext={() => {
        setStatus(undefined);
        setSelectedNote(undefined);
        setNoteFret(getRandomFret());
        setNoteString(getRandomString());
        setCardNumber(cardNumber + 1);
      }}
      status={status}
      totalCards={TOTAL_CARDS}
    >
      <Fretboard fret={noteFret} string={noteString} />
      <NoteButtons
        onChange={(note) => {
          setSelectedNote(note);
          setStatus(getStatus({ noteFret, noteString, selectedNote: note }));
        }}
        resultStatus={status}
        selectedNote={selectedNote}
      />
    </FlashcardWrapper>
  );
}

const TOTAL_CARDS = 10;

function getRandomString(): GuitarString {
  return Object.values(GuitarString)[Math.floor(Math.random() * 6)];
}

function getRandomFret(): number {
  return Math.floor(Math.random() * 12);
}

function getStatus({
  noteFret,
  noteString,
  selectedNote,
}: {
  noteFret: number;
  noteString: GuitarString;
  selectedNote: Note;
}): ResultStatus {
  const correctNote = getNote(noteString, noteFret);
  if (selectedNote === correctNote) return ResultStatus.Correct;
  return ResultStatus.Incorrect;
}

export function NameTheNoteFlashcardPage(): React.ReactElement {
  return (
    <PageWrapper>
      <NameTheNoteFlashcard />
    </PageWrapper>
  );
}
