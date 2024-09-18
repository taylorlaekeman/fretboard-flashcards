import clsx from 'clsx';
import React from 'react';

import { Button } from './Button';
import Fretboard from './Fretboard';
import styles from './NameTheNoteFlashcard.module.css';
import NoteButtons from './NoteButtons';
import { PageWrapper } from './PageWrapper';
import { Note } from '../types/note';
import GuitarString from '../types/string';
import { getNote } from '../utils/getNote';

export function NameTheNoteFlashcard({
  noteFret = 5,
  noteString = GuitarString.E,
  onNext = () => {},
  onSelectNote = () => {},
  onSubmit = () => {},
  selectedNote,
  status,
}: {
  noteFret?: number;
  noteString?: GuitarString;
  onSelectNote?: (note: Note) => void;
  onNext?: () => void;
  onSubmit?: () => void;
  selectedNote?: Note;
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <FlashcardWrapper onNext={onNext} onSubmit={onSubmit} status={status}>
      <div className={styles.fretboard}>
        <Fretboard fret={noteFret} string={noteString} />
      </div>
      <NoteButtons onChange={onSelectNote} selectedNote={selectedNote} />
    </FlashcardWrapper>
  );
}

function FlashcardWrapper({
  children,
  onNext = () => {},
  onSubmit = () => {},
  status,
}: {
  children?: React.ReactNode;
  onNext?: () => void;
  onSubmit?: () => void;
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.footer}>
        <FlashcardResultSection status={status} />
        <FlashcardControlGroup onNext={onNext} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

function FlashcardResultSection({
  status,
}: {
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <div>
      {status === ResultStatus.Correct && (
        <p className={clsx(styles.resultBadge, styles.correct)}>Correct!</p>
      )}
      {status === ResultStatus.Incorrect && (
        <p className={clsx(styles.resultBadge, styles.incorrect)}>Try again</p>
      )}
    </div>
  );
}

export enum ResultStatus {
  Correct = 'correct',
  Incorrect = 'incorrect',
}

function FlashcardControlGroup({
  onNext = () => {},
  onSubmit = () => {},
}: {
  onNext?: () => void;
  onSubmit?: () => void;
}): React.ReactElement {
  return (
    <div className={styles.buttons}>
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

export function NameTheNoteFlashcardContainer(): React.ReactElement {
  const [selectedNote, setSelectedNote] = React.useState<Note | undefined>();
  const [noteString, setNoteString] = React.useState<GuitarString>(
    getRandomString(),
  );
  const [noteFret, setNoteFret] = React.useState<number>(getRandomFret());
  const [status, setStatus] = React.useState<ResultStatus | undefined>();
  return (
    <NameTheNoteFlashcard
      noteFret={noteFret}
      noteString={noteString}
      onNext={() => {
        setStatus(undefined);
        setSelectedNote(undefined);
        setNoteFret(getRandomFret());
        setNoteString(getRandomString());
      }}
      onSelectNote={setSelectedNote}
      onSubmit={() => {
        if (!selectedNote) return;
        setStatus(getStatus({ noteFret, noteString, selectedNote }));
      }}
      selectedNote={selectedNote}
      status={status}
    />
  );
}

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
      <NameTheNoteFlashcardContainer />
    </PageWrapper>
  );
}
