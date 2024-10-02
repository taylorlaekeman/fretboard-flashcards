import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';

import { Button } from './Button';
import { Orientation } from './Fretboard';
import styles from './NameTheNoteFlashcard.module.css';
import NoteButtons from './NoteButtons';
import { PageWrapper } from './PageWrapper';
import { Note } from '../types/note';
import { ResultStatus } from '../types/resultStatus';
import GuitarString from '../types/string';
import { getNote } from '../utils/getNote';

const Fretboard = dynamic(() => import('./Fretboard'), { ssr: false });

export function NameTheNoteFlashcard({
  noteFret = 5,
  noteString = GuitarString.E,
  onNext = () => {},
  onSelectNote = () => {},
  selectedNote,
  status,
}: {
  noteFret?: number;
  noteString?: GuitarString;
  onSelectNote?: (note: Note) => void;
  onNext?: () => void;
  selectedNote?: Note;
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <FlashcardWrapper onNext={onNext} status={status}>
      <Fretboard fret={noteFret} string={noteString} />
      <NoteButtons
        onChange={onSelectNote}
        resultStatus={status}
        selectedNote={selectedNote}
      />
    </FlashcardWrapper>
  );
}

function FlashcardWrapper({
  children,
  onNext = () => {},
  status,
}: {
  children?: React.ReactNode;
  onNext?: () => void;
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <FlashcardResultSection status={status} />
        <Button onClick={onNext}>Next</Button>
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
        <p className={styles.resultBadge}>&#x1f389;</p>
      )}
      {status === ResultStatus.Incorrect && (
        <p className={styles.resultBadge}>&#x1f62d;</p>
      )}
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
      onSelectNote={(note) => {
        setSelectedNote(note);
        setStatus(getStatus({ noteFret, noteString, selectedNote: note }));
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
