import dynamic from 'next/dynamic';
import React from 'react';

import { Flashcard as FlashcardWrapper } from './Flashcard';
import NoteButtons from './NoteButtons';
import { PageWrapper } from './PageWrapper';
import { H2, P, Text } from './Text';
import { Note } from '../types/note';
import { ResultStatus } from '../types/resultStatus';
import { useRandomNote } from '@/hooks/useRandomNote';
import { Guess, useGuesses } from '@/hooks/useGuesses';

const Fretboard = dynamic(() => import('./Fretboard'), { ssr: false });

export function NameTheNoteFlashcard(): React.ReactElement {
  const [cardNumber, setCardNumber] = React.useState<number>(0);
  const [selectedNote, setSelectedNote] = React.useState<Note | undefined>();
  const { guess, guesses, start } = useGuesses<Note>();
  const {
    next: getNextNote,
    note: expectedNote,
    noteFret,
    noteString,
  } = useRandomNote();

  const status = getStatus({ expectedNote, selectedNote });

  if (cardNumber === 0) {
    return (
      <FlashcardWrapper
        isNextEnabled
        nextText="Start"
        onNext={() => {
          start(expectedNote);
          setCardNumber(1);
        }}
      >
        <H2>Fretboard</H2>
        <P>Learn the fretboard</P>
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
        <Text>Done</Text>
        <P>Accuracy {Math.round((10 / guesses.length) * 100)}%</P>
        <P>Average Time {Math.round(getAverageTime(guesses) / 100) / 10}</P>
        <ul>
          {guesses.map((guess, index) => (
            <li key={`${guess.guess}-${index}`}>
              {guess.guess} ({guess.status}, {Math.round(guess.time / 100) / 10}
              )
            </li>
          ))}
        </ul>
      </FlashcardWrapper>
    );
  }

  return (
    <FlashcardWrapper
      cardNumber={cardNumber}
      isNextEnabled={status === ResultStatus.Correct}
      onNext={() => {
        setSelectedNote(undefined);
        const { note } = getNextNote();
        setCardNumber(cardNumber + 1);
        start(note);
      }}
      status={status}
      totalCards={TOTAL_CARDS}
    >
      <Fretboard fret={noteFret} string={noteString} />
      <NoteButtons
        onChange={(note) => {
          setSelectedNote(note);
          guess(note);
        }}
        resultStatus={status}
        selectedNote={selectedNote}
      />
    </FlashcardWrapper>
  );
}

const TOTAL_CARDS = 10;

export function NameTheNoteFlashcardPage(): React.ReactElement {
  return (
    <PageWrapper>
      <NameTheNoteFlashcard />
    </PageWrapper>
  );
}

function getStatus({
  expectedNote,
  selectedNote,
}: {
  expectedNote: Note;
  selectedNote?: Note;
}): ResultStatus | undefined {
  if (!selectedNote) return undefined;
  if (selectedNote === expectedNote) return ResultStatus.Correct;
  return ResultStatus.Incorrect;
}

function getAverageTime(guesses: Guess<Note>[]): number {
  const correctGuesses = guesses.filter(
    (guess) => guess.status === ResultStatus.Correct,
  );
  const totalTime = correctGuesses.reduce(
    (total, guess) => (total += guess.time),
    0,
  );
  return totalTime / correctGuesses.length;
}
