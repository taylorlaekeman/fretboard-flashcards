import React from 'react';

import { Button } from './Button';
import Fretboard from './Fretboard';
import NoteButtons from './NoteButtons';
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
      <Fretboard fret={noteFret} string={noteString} />
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
    <>
      {children}
      <FlashcardResultSection status={status} />
      <FlashcardControlGroup onNext={onNext} onSubmit={onSubmit} />
    </>
  );
}

function FlashcardResultSection({
  status,
}: {
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <>
      {status === ResultStatus.Correct && <p>Correct!</p>}
      {status === ResultStatus.Incorrect && <p>Incorrect</p>}
    </>
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
    <>
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={onNext}>Next</Button>
    </>
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
